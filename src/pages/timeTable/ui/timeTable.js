import {useEffect, useState} from 'react';
import {DndContext} from "@dnd-kit/core"
import {useDispatch, useSelector} from "react-redux";

import {
    TimeTableScheduleList,
    TimeTableSchedule,
    TimeTableFilters,
    TimeTableError
} from "entities/timeTable";
import {API_URL, useHttp} from "shared/api/base";
import {fetchTimeTableBranch, fetchTimeTableClassData, fetchTimeTableColorData} from "../model/thunk/timeTableThunk";
import {
    getTimeTableBranchData,
    getTimeTableClassData,
    getTimeTableColorData
} from "../model/selector/timeTableSelector";

import cls from "./timeTable.module.sass";
import {getBranchThunk} from "../../../entities/editCreates/model/thunk/branchThunk";

// get_all_groups/

export const TimeTable = () => {

    const {request} = useHttp()
    const dispatch = useDispatch()
    const classData = useSelector(getTimeTableClassData)
    const colorData = useSelector(getTimeTableColorData)
    const branchData = useSelector(getTimeTableBranchData)

    const [activeClassList, setActiveClassList] = useState([])
    const [activeDrag, setActiveDrag] = useState(null)
    const [activeDrop, setActiveDrop] = useState(null)
    const [data, setData] = useState(null)

    const [activeModal, setActiveModal] = useState(false)

    // console.log(data, "data")

    // useEffect(() => {
    //     dispatch(fetchTimeTableData())
    //     request(`${API_URL}Permissions/tables/`, "GET", null)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //     request(`${API_URL}Permissions/get_all_groups/`, "GET", null)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //     request(`${API_URL}Permissions/create_job/`, "GET", null)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, [])
    useEffect(() => {
        dispatch(fetchTimeTableClassData())
        dispatch(fetchTimeTableColorData())
        dispatch(getBranchThunk())
    }, [])


    return (
        <DndContext onDragEnd={handleDragEnd} >
            <div className={cls.timeTable}>
                <TimeTableFilters
                    classData={classData}
                    colorData={colorData}
                    branchData={branchData}
                    setActiveModal={setActiveModal}
                    setActiveDrag={setActiveDrag}
                    setActiveDrop={setActiveDrop}
                    activeDrag={activeDrag}
                    setData={setData}
                    setActive={setActiveClassList}
                />
                {/*<TimeTableSchedule*/}
                {/*    subjectData={data}*/}
                {/*    activeDrop={activeDrop}*/}
                {/*/>*/}
                <TimeTableScheduleList
                    length={activeClassList}
                    data={data}
                    setData={setData}
                    activeDrop={activeDrop}
                />
                <TimeTableError
                    setActive={setActiveModal}
                    active={activeModal}
                />
            </div>
        </DndContext>
    )

    function handleDragEnd(event) {
        const { over, active } = event;
        setActiveDrag(active?.id)
        setActiveDrop(over?.id)

        console.log(event, "event")
    }
}
