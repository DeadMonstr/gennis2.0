import React, {useEffect, useMemo, useState} from 'react';

import { Pagination } from "features/pagination";
import {GiveEmployerSalaryModal} from "../../../features/giveEmployerSalary";
import {GiveSalaryList} from "entities/giveSalary";
import {branches} from "entities/giveSalary";
import { Select } from "shared/ui/select";
import {Button} from "shared/ui/button";
import cls from "./giveSalaryPage.module.sass";
import {useSelector, useDispatch} from "react-redux";
import {fetchEmployerSalaryThunk} from "../model/giveSalaryPageThunk";
import {getSalaryInsideSource} from "../model/selectors/selectors";
import {useParams} from "react-router-dom";

export const GiveSalaryPage = () => {
    const [selected, setSelected] = useState("");
    const PageSize = useMemo(() => 20, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [currentTableData, setCurrentTableData] = useState([]);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch()
    const getSalaryGivesData = useSelector(getSalaryInsideSource)
    const {id} = useParams()
    useEffect(() => {
        if(id)
        {
            dispatch(fetchEmployerSalaryThunk(id))
        }

    }, [dispatch, id])

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
                    currentTableData={getSalaryGivesData?.usersalarylist}
                    currentPage={currentPage}
                    PageSize={PageSize}
                />
            </div>
            {/*<Pagination*/}
            {/*    setCurrentTableData={setCurrentTableData}*/}
            {/*    users={giveSalary}*/}
            {/*    search={search}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*    currentPage={currentPage}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={page => setCurrentPage(page)}*/}
            {/*/>*/}
            <GiveEmployerSalaryModal
                active={active}
                setActive={setActive}

            />
        </div>
    );
};
