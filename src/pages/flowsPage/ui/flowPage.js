import {getUserBranchId} from "entities/profile/userProfile";
import {getCurseLevelData} from "entities/students";
import {getCurseLevel} from "entities/students/model/studentsSlice";
import {FlowAddForm} from "features/flow";
import {Pagination} from "features/pagination";
import {getSearchValue} from "features/searchInput";
import {API_URL, headers, useHttp} from "shared/api/base";
import cls from "./flowsPage.module.sass"
import {Select} from "shared/ui/select";
import {Button} from "shared/ui/button";
import {Radio} from "shared/ui/radio";
import {useEffect, useMemo, useState} from "react";

import {Flows} from "entities/flows";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlows} from "entities/flows";
import {getFlows} from "entities/flows";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {fetchTeachersData, getTeachers} from "entities/teachers";
import {useForm} from "react-hook-form";
import {getFlowsLoading} from "entities/flows/model/selector/flowsSelector";
import {getBranch} from "features/branchSwitcher";


export const FlowsPage = () => {


    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue);

    const branch = localStorage.getItem("selectedBranch")
    const {request} = useHttp()
    const dispatch = useDispatch()
    const flows = useSelector(getFlows)
    const flowsLoading = useSelector(getFlowsLoading)
    const userBranchId = useSelector(getBranch)
    const teachers = useSelector(getTeachers)
    const level = useSelector(getCurseLevelData)


    const [active, setActive] = useState(false)

    const searchedFlow = useMemo(() => {
        const filteredRooms = flows?.filter(item => !item.deleted) || [];
        setCurrentPage(1);

        if (!search) return filteredRooms;

        return filteredRooms.filter(item =>
            item?.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [flows, search]);


    console.log(branch , "flow id")

    useEffect(() => {
        dispatch(fetchFlows())
    }, [])
    useEffect(() => {
        if (branch)
            dispatch(fetchTeachersData({userBranchId: branch}))
    }, [branch])

    const getLevelData = (id) => {
        const subjectId = teachers.filter(item => item.id === +id)[0]?.subject[0]?.id
        request(`${API_URL}Subjects/level-for-subject/${subjectId}/`, "GET", null, headers())
            .then(res => {
                console.log(res, "level data")
                dispatch(getCurseLevel(res))
            })
            .catch(err => console.log(err))
    }


    return (
        <div className={cls.flow}>
            <div className={cls.flow__header}>

                {/*<div className={cls.flow__location}>*/}
                {/*    <Select/>*/}
                {/*</div>*/}

            </div>
            <Flows
                branchId={userBranchId.id}
                currentTableData={currentTableData}
                loading={flowsLoading}
                teacherData={teachers}
                levelData={level}
                getLevelData={getLevelData}
                setActive={setActive}
            />
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedFlow}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}/>
            {/*<FlowAddForm*/}
            {/*    active={active}*/}
            {/*    setActive={setActive}*/}
            {/*/>*/}
        </div>
    )
}