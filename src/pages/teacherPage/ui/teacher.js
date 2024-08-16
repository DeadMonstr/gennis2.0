import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TeacherFilter} from "features/filters/teacherFilter";
import {Pagination} from "features/pagination";
import {getSearchValue} from "features/searchInput";
import {DeletedTeachers, Teachers} from "entities/teachers";
import {Button} from "shared/ui/button";
import cls from "./teacher.module.sass";
import {getTeachers} from "../../../entities/teachers";
import {getTeacherLoading} from "entities/teachers";
import {fetchTeachersData} from "../../../entities/teachers";
import {DefaultLoader} from "../../../shared/ui/defaultLoader";


const branches = [
    {name: "chirchiq"},
    {name: "chirchiq1"},
    {name: "chirchiq2"},
]
export const TeachersPage = () => {
    const loading = useSelector(getTeacherLoading)
    const search = useSelector(getSearchValue)
    const teachersData = useSelector(getTeachers)

    const dispatch = useDispatch()


    useEffect(() =>{
        dispatch(fetchTeachersData())
    } ,[dispatch])
    console.log(teachersData , "teach")







    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState()
    const [active, setActive] = useState()
    const [activeSwitch, setActiveSwitch] = useState(false)

    const searchedUsers = useMemo(() => {
        const filteredHeroes = teachersData.slice()
        setCurrentPage(1)

        if (!search) return  filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [teachersData, setCurrentPage, search])

    return (
        <div className={cls.teacher}>

            <div className={cls.teacher__filter}>
                <Button
                    status={"filter"}
                    extraClass={cls.extraCutClassFilter}
                    onClick={() => setActive(!active)}
                    type={"filter"}
                >
                    Filter
                </Button>
                <Button type={"login"} status={"timeTable"}>
                    time table
                </Button>
            </div>
                    <div className={cls.table}>

                <h2>{activeSwitch ? "Deleted Teachers" : "Teachers"}</h2>
                {activeSwitch ?
                    <DeletedTeachers
                        data={teachersData}
                        // data={searchedUsers}
                    />
                    :
                    <Teachers
                        loading={getTeacherLoading}
                        data={currentTableData}
                        // data={currentTableData}
                    />}
            </div>

            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedUsers}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}
            />

            <TeacherFilter
                activeSwitch={activeSwitch}
                setActiveSwitch={setActiveSwitch}
                setActive={setActive}
                active={active}
            />
        </div>
    )
}