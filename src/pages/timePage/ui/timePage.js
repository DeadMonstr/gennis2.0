import {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getSearchValue} from "features/searchInput";
import {Pagination} from "features/pagination";
import {
    TimeTableChange,
    TimeTableCreate,
    TimeTableHeader,
    TimeTableList
} from "entities/timeTable";
import {getTimeTableData} from "../model/selector";
import {changeTime} from "../model/slice";

import cls from "./timePage.module.sass";

export const TimePage = () => {

    const dispatch = useDispatch()

    const data = useSelector(getTimeTableData)
    const [isCreate, setIsCreate] = useState(false)
    const [isChange, setIsChange] = useState(null)
    const [isFilter, setIsFilter] = useState(false)

    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 10, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const searchedUsers = useMemo(() => {
        const filteredHeroes = data.slice()
        setCurrentPage(1)

        if (!search) return  filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [data, setCurrentPage, search])

    const onSubmitCreate = (data) => {
        console.log(data, "data create")
    }

    const onSubmitChange = (data) => {
        console.log(data, "data change")
        dispatch(changeTime(data))
    }

    return (
        <div className={cls.timeTable}>
            <TimeTableHeader
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                setIsFilter={setIsFilter}
            />
            <div className={cls.timeTable__table}>
                <TimeTableList
                    data={currentTableData}
                    setIsChange={setIsChange}
                />
                <Pagination
                    setCurrentTableData={setCurrentTableData}
                    users={searchedUsers}
                    currentPage={currentPage}
                    pageSize={PageSize}
                    onPageChange={page => {
                        setCurrentPage(page)
                    }}
                />
            </div>
            <TimeTableCreate
                active={isCreate}
                setActive={setIsCreate}
                onSubmit={onSubmitCreate}
            />
            <TimeTableChange
                active={isChange}
                setActive={setIsChange}
                onSubmit={onSubmitChange}
            />
        </div>
    )
}
