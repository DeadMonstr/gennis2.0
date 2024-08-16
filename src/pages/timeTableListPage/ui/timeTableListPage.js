import {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getSearchValue} from "features/searchInput";
import {Pagination} from "features/pagination";
import {
    TimeTableChange,
    TimeTableCreate,
    TimeTableHeader,
    TimeTableList
} from "entities/timeTable";
import {
    getTimeTableData,
    getTimeTableLoading
} from "../model/timeTableListSelector/timeTableListSelector";
import {changeTime} from "../model/timeTableListSlice/timeTableListSlice";
import {
    createTimeTable,
    fetchTimeTableListData,
    updateTimeTable
} from "../model/timeTableListThunk/timeTableListThunk";

import cls from "./timeTableListPage.module.sass";

export const TimeTableListPage = () => {

    useEffect(() => {
        dispatch(fetchTimeTableListData())
    }, [])

    const dispatch = useDispatch()

    const data = useSelector(getTimeTableData)
    const loading = useSelector(getTimeTableLoading)
    const [isCreate, setIsCreate] = useState(false)
    const [isChange, setIsChange] = useState(null)
    const [isFilter, setIsFilter] = useState(false)
    const [currentStatus, setCurrentStatus] = useState(false)

    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 10, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    console.log(currentTableData, "data")

    const searchedUsers = useMemo(() => {
        const filteredHeroes = data?.slice()
        setCurrentPage(1)

        console.log(search, true)

        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [data, setCurrentPage, search])

    const onSubmitCreate = (data) => {
        dispatch(createTimeTable(data))
        setCurrentStatus(true)
    }

    const onSubmitChange = (data) => {
        dispatch(updateTimeTable({id: isChange?.id, obj: data}))
        setCurrentStatus(true)
    }

    return (
        <div className={cls.timeTable}>
            <TimeTableHeader
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                setIsFilter={setIsFilter}
                setStatus={setCurrentStatus}
            />
            <div className={cls.timeTable__table}>
                <TimeTableList
                    data={currentTableData}
                    setIsChange={setIsChange}
                    loading={loading}
                    setStatus={setCurrentStatus}
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
                active={currentStatus ? false : isCreate}
                setActive={setIsCreate}
                onSubmit={onSubmitCreate}
                loading={loading}
            />
            <TimeTableChange
                active={currentStatus ? false : isChange}
                setActive={setIsChange}
                onSubmit={onSubmitChange}
                loading={loading}
            />
        </div>
    )
}