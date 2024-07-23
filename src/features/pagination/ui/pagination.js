import React, {useCallback, useEffect, useMemo} from 'react';
import classNames from "classnames";

import {usePagination, DOTS} from "shared/lib/hooks/usePagination";

import cls from "./pagination.module.sass";

export const Pagination = React.memo((props) => {

    const {
        users,
        search,
        onPageChange,
        siblingCount = 1,
        setCurrentPage,
        currentPage,
        pageSize,
        className,
        setCurrentTableData,
        type = "basic"
    } = props;

    const searchedUsers = useMemo(() => {
        const filteredHeroes = users.slice()
        setCurrentPage(1)
        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase()) ||
            item.surname?.toLowerCase().includes(search.toLowerCase()) ||
            item.username?.toLowerCase().includes(search.toLowerCase()) ||
            item.fullName?.toLowerCase().includes(search.toLowerCase()) ||
            item.sitterNumber?.toLowerCase().includes(search.toLowerCase()) ||
            item.allSalary?.toLowerCase().includes(search.toLowerCase()) ||
            item.subjectName?.toLowerCase().includes(search.toLowerCase()) ||
            item.workName?.toLowerCase().includes(search.toLowerCase()) ||
            item.workerName.toLowerCase().includes(search.toLowerCase())
        )
    }, [users, setCurrentPage, search])

    useEffect(() => {
        setCurrentTableData(() => {
            const firstPageIndex = (currentPage - 1) * pageSize;
            const lastPageIndex = firstPageIndex + pageSize;
            return searchedUsers.slice(firstPageIndex, lastPageIndex);
        })
    }, [pageSize, currentPage, searchedUsers, setCurrentTableData])


    const paginationRange = usePagination({
        currentPage,
        totalCount: searchedUsers.length,
        siblingCount,
        pageSize
    });

    const renderPageNumbers = useCallback(() => {
        return paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
                return <li key={index} className={classNames(cls.pagination_item, "dots")}>&#8230;</li>;
            }

            return (
                <li
                    key={index}
                    className={classNames(cls.pagination_item, {
                        [cls.selected]: pageNumber === currentPage && type === "basic",
                        [cls.customSelected]: pageNumber === currentPage && type === "custom"
                    })}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </li>
            );
        })
    }, [currentPage, onPageChange, paginationRange])


    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    const renderedPages = renderPageNumbers()


    return (
        <ul
            className={classNames(cls.pagination_container, {[className]: className})}
        >
            <li
                key={10000}
                className={classNames(cls.pagination_item, cls.arrow, {
                    [cls.disabled]: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <i className="fas fa-arrow-left"></i>
            </li>
            <div className={cls.numbers}>
                {renderedPages}
            </div>

            <li
                key={100001}
                className={classNames(cls.pagination_item, cls.arrow, {
                    [cls.disabled]: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <i className="fas fa-arrow-right"></i>
            </li>
        </ul>
    );
})