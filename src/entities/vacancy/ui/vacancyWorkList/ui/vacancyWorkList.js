import React from 'react';
import { Table } from "shared/ui/table";
import cls from './vacancyWorkList.module.sass';
import { Button } from "../../../../../shared/ui/button";

export const VacancyWorkList = ({ currentTableData, currentPage, PageSize, editMode, onEditClick }) => {
    const renderVacancies = () => {
        return currentTableData.map((item, index) => (
            <tr key={item.id}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                    <td>{item.workName}</td>
                <td>{item.workerNames}</td>
            </tr>
        ));
    };

    return (
        <Table>
            <thead className={cls.theadBody}>
            <tr>
                <th>№</th>
                <th>Nima ish qilishi</th>
                <th>Manimcha kimligi bo'sa kere</th>
            </tr>
            </thead>
            <tbody>
            {renderVacancies()}
            </tbody>
        </Table>
    );
};
