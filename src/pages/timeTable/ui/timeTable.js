import {useEffect, useState} from 'react';
import {DndContext} from "@dnd-kit/core"
import {useDispatch, useSelector} from "react-redux";

import {getUserBranchId} from "pages/profilePage";
import {fetchSubjectsAndLanguages} from "pages/registerPage";
import {
    TimeTableScheduleList,
    TimeTableSchedule,
    TimeTableFilters,
    TimeTableError
} from "entities/timeTable";
import {getRoomsData, fetchRoomsData} from "entities/rooms";
import {getBranchThunk, getLocations} from "entities/editCreates";
import {API_URL, useHttp} from "shared/api/base";
import {
    addTimeTableData, deleteTimeTableData,
    fetchTimeTableClassData,
    fetchTimeTableColorData, fetchTimeTableData,
    fetchTimeTableTeacherData
} from "../model/thunk/timeTableThunk";
import {
    getCurrentTimeTableData,
    getTimeTableClassData,
    getTimeTableColorData,
    getTimeTableData,
    getTimeTableTeacherData
} from "../model/selector/timeTableSelector";

import cls from "./timeTable.module.sass";
import {addIdForTimeTableData, clearTimeTableData} from "../model/slice/timeTableSlice";

// get_all_groups/

export const TimeTable = () => {

    const {request} = useHttp()
    const dispatch = useDispatch()
    const classData = useSelector(getTimeTableClassData)
    const colorData = useSelector(getTimeTableColorData)
    const branchData = useSelector(getLocations)
    const userBranchId = useSelector(getUserBranchId)
    const roomData = useSelector(getRoomsData)
    const teacherData = useSelector(getTimeTableTeacherData)
    const timeData = useSelector(getTimeTableData)
    const currentTimeTableData = useSelector(getCurrentTimeTableData)
    const subjectData = useSelector(state => state.registerUser.subjects)

    const [activeClassList, setActiveClassList] = useState([])
    const [activeDrag, setActiveDrag] = useState(null)
    const [activeDrop, setActiveDrop] = useState(null)
    const [data, setData] = useState(null)

    const [activeModal, setActiveModal] = useState(false)

    useEffect(() => {
        dispatch(fetchTimeTableClassData())
        dispatch(fetchTimeTableColorData())
        dispatch(getBranchThunk())
        dispatch(fetchRoomsData())
        dispatch(fetchSubjectsAndLanguages())
    }, [])

    useEffect(() => {
        if (userBranchId) {
            dispatch(fetchTimeTableTeacherData(userBranchId))
        }
    }, [userBranchId])

    useEffect(() => {
        activeClassList?.map((item, index) => {
            if (item !== timeData[index]?.id)
                dispatch(fetchTimeTableData(item))
        })
    }, [activeClassList])

    // useEffect(() => {
    //     dispatch(clearTimeTableData(activeClassList))
    // }, [activeClassList])

    useEffect(() => {
        if (currentTimeTableData && activeClassList.length) {
            dispatch(addIdForTimeTableData({
                id: activeClassList[activeClassList.length - 1],
                data: currentTimeTableData
            }))
            dispatch(clearTimeTableData(activeClassList))
        }
    }, [currentTimeTableData, activeClassList])

    console.log(timeData, "timeData")

    const onSubmit = (data) => {
        console.log(data, "data")
        dispatch(addTimeTableData(data))
    }

    const onDelete = (data) => {
        console.log(data, "data delete")
        dispatch(deleteTimeTableData(data))
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={cls.timeTable}>
                <TimeTableFilters
                    classData={classData}
                    colorData={colorData}
                    branchData={branchData}
                    roomData={roomData}
                    subjectData={subjectData}
                    teacherData={teacherData}
                    setActiveModal={setActiveModal}
                    setActiveDrag={setActiveDrag}
                    setActiveDrop={setActiveDrop}
                    activeDrag={activeDrag}
                    setData={setData}
                    setActive={setActiveClassList}
                />
                <TimeTableScheduleList
                    length={activeClassList}
                    data={timeData}
                    setData={setData}
                    activeDrop={activeDrop}
                    subjectData={data}
                    onSubmit={onSubmit}
                    onDelete={onDelete}
                    userBranchId={userBranchId}
                    handleDragEndInner={handleDragEndInner}
                />
                <TimeTableError
                    setActive={setActiveModal}
                    active={activeModal}
                />
            </div>
        </DndContext>
    )

    function handleDragEndInner(event) {

    }

    function handleDragEnd(event) {
        const {over, active} = event;
        setActiveDrag(active?.id)
        setActiveDrop(over?.id)

        console.log(event, "event")
    }
}
