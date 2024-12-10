import React, {useEffect, useMemo, useState} from 'react';
import { Pagination } from "features/pagination";
import {
    TeacherSalaryList,
    branches,
    salary
} from "entities/teacherSalary";
import { Select } from "shared/ui/select";
import cls from "./employerSalaryPage.module.sass";
import {useSelector, useDispatch} from "react-redux";
import {EmployerSalaryList, fetchEmployerSalaryThunk} from "../../../entities/employerSalary";
import {getEmployerSalaries} from "../../../entities/employerSalary";
import {useParams} from "react-router-dom";
import {getSearchValue} from "../../../features/searchInput";
import {getBranch} from "../../../features/branchSwitcher";

export const EmployerSalaryPage = () => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");
    let PageSize = useMemo(() => 20, []);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(getSearchValue)
    const [currentTableData, setCurrentTableData] = useState([]);
    const dispatch = useDispatch()
    const employerSalaries = useSelector(getEmployerSalaries)
    // const {id} = useParams()
    const {id} = useSelector(getBranch)
    const handleChange = (value) => {
        setSelected(value);
    };

    // const searchedUsers = useMemo(() => {
    //     const filteredHeroes = employerSalaries?.usersalary.slice()
    //     setCurrentPage(1)
    //
    //     if (!search) return  filteredHeroes
    //
    //     return filteredHeroes.filter(item =>
    //         item.total_salary?.toLowerCase().includes(search.toLowerCase())
    //     )
    // }, [employerSalaries, setCurrentPage, search])
    const onChangeOption = (value) => {
        setSelected(value)
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchEmployerSalaryThunk(id))
        }
    }, [dispatch, id])


    return (
        <div className={cls.mainContainer}>
            <div className={cls.mainContainer_buttonPanelBox}>
                <div className={cls.mainContainer_buttonPanelBox_leftCreateButton}>
                </div>
                <Select
                    onChangeOption={() => onChangeOption}
                    options={branches}
                />
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <EmployerSalaryList
                    currentTableData={employerSalaries}
                    currentPage={currentPage}
                    PageSize={PageSize}
                />
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={employerSalaries?.usersalary}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => setCurrentPage(page)}*/}
            {/*/>*/}
        </div>
    );
};
