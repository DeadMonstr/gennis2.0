import React, {useState} from 'react';
import { Table } from "shared/ui/table";
import cls from './vacancyWorkerList.module.sass';
import { Button } from "../../../../../shared/ui/button";
import Groups from "../../../../groups";
import {GroupsFilter} from "../../../../../features/filters/groupsFilter";
import {VacancyWorkerEdit} from "../../../../../features/vacancyModals/vacancyWorkerEdit";

export const VacancyWorkerList = ({ currentTableData, currentPage, PageSize, editMode, onEditClick }) => {

    const [actives, setActives] = useState(false)
    const renderVacancies = () => {
        return currentTableData.map((item, index) => (
            <tr key={item.id}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td className={cls.workerList}><img src={item.workerImg} alt=""/> {item.workerName} <img className={cls.workerSetting} onClick={() => setActives(!actives)} src={item.workerSetting} alt=""/></td>
            </tr>
        ));
    };

    return (
        <>
            <Table>
                <thead className={cls.theadBody}>
                <tr>
                    <th>№</th>
                    <th>Worker</th>
                </tr>
                </thead>
                <tbody>
                {renderVacancies()}
                </tbody>
            </Table>
            <VacancyWorkerEdit active={actives} setActive={setActives}/>
        </>


    );
};
