import React, { useMemo, useState } from 'react';

import { Pagination } from "features/pagination";
import {GiveSalaryModal} from "features/giveSalary/giveSalary";
import {GiveSalaryList} from "entities/giveSalary";
import {giveSalary, branches} from "entities/giveSalary";
import { Select } from "shared/ui/select";
import {Button} from "shared/ui/button";

import cls from "./giveSalaryPage.module.sass";

export const GiveSalaryPage = () => {
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
            <div className={cls.mainContainer_filterPanelBox}>
                <div></div>
                <div className={cls.mainContainer_filterPanelBox_rightFilterRadioGroupBox}>
                  <Button
                      children={"Oylik berish"}
                      onClick={() => setActive(true)}
                  />
                </div>
            </div>
            <div className={cls.mainContainer_tablePanelBox}>
                <GiveSalaryList
                    currentTableData={currentTableData}
                    currentPage={currentPage}
                    PageSize={PageSize}
                />
            </div>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={giveSalary}
                search={search}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <GiveSalaryModal
                active={active}
                setActive={setActive}

            />
        </div>
    );
};
