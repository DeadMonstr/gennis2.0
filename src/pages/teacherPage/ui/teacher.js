import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";

import {TeacherFilter} from "features/filters/teacherFilter";
import {Pagination} from "features/pagination";
import {getSearchValue} from "features/searchInput";
import {DeletedTeachers, Teachers} from "entities/teachers";
import {teachersData} from "entities/teachers/teachers/ui/teachers";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";

import cls from "./teacher.module.sass";

const branches = [
    {name: "chirchiq"},
    {name: "chirchiq1"},
    {name: "chirchiq2"},
]
export const TeachersPage = () => {

    const search = useSelector(getSearchValue)

    console.log(true)

    console.log(search, "search Teacher")

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
            item.name?.toLowerCase().includes(search.toLowerCase()) ||
            item.surname?.toLowerCase().includes(search.toLowerCase()) ||
            item.username?.toLowerCase().includes(search.toLowerCase()) ||
            item.fullName?.toLowerCase().includes(search.toLowerCase())
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
                        data={searchedUsers}
                    />
                    :
                    <Teachers
                        data={searchedUsers}
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