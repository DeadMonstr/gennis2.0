import React, { useMemo, useState } from 'react';
import { Pagination } from "features/pagination";
import { Select } from "shared/ui/select";
import {TeacherSalaryList} from "../../../entities/teacherSalary/ui";
import {salary, branches} from "../../../entities/teacherSalary/model";
import cls from "./teacherSalaryPage.module.sass";

export const TeacherSalaryPage = () => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");
    const PageSize = useMemo(() => 20, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);

    const handleChange = (value) => {
        setSelected(value);
    };

    const onChangeOption = (value) => {
        setSelected(value)
    }

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
                <TeacherSalaryList
                    currentTableData={currentTableData}
                    currentPage={currentPage}
                    PageSize={PageSize}
                />
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={salary}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
};
