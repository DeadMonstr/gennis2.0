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
import {getFlowsLoading} from "../../../entities/flows/model/selector/flowsSelector";



export const FlowsPage = () => {



    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")

    const flows = useSelector(getFlows)

    const flowsLoading = useSelector(getFlowsLoading)

    const teachers = useSelector(getTeachers)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchFlows())
    }, [])
    useEffect(() => {
        dispatch(fetchTeachersData())
    } , [])






    return (
        <div className={cls.flow}>
            <div className={cls.flow__header}>

                <div className={cls.flow__location}>
                    <Select/>
                </div>

            </div>
            <Flows currentTableData={flows} loading={flowsLoading} teacherData={teachers}/>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={flows}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => {*/}
            {/*        setCurrentPage(page)*/}
            {/*    }}*/}
            {/*    type={"custom"}/>*/}

        </div>
    )
}