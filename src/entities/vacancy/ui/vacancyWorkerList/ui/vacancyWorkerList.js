import React from 'react';
import { Table } from "shared/ui/table";
import cls from './vacancyWorkerList.module.sass';
import { Button } from "../../../../../shared/ui/button";

export const VacancyWorkerList = ({ currentTableData, currentPage, PageSize, editMode, onEditClick }) => {
    const renderVacancies = () => {
        return currentTableData.map((item, index) => (
            <tr key={item.id}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td className={cls.workerList}><img src={item.workerImg} alt=""/> {item.workerName} <img src={item.workerSetting} alt=""/></td>
            </tr>
        ));
    };

    return (
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
    );
};
