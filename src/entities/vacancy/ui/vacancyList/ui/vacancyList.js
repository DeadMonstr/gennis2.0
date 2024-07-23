import React from 'react';
import { Table } from "shared/ui/table";
import cls from './vacancyList.module.sass';
import { Button } from "shared/ui/button";
import {Link} from "shared/ui/link";

export const VacancyList = ({ currentTableData, currentPage, PageSize, editMode, onEditClick }) => {
    const renderVacancies = () => {
        return currentTableData.map((item, index) => (
            <tr key={item.id}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <Link to={"vacancyWorkPage"}>
                    <td className={cls.otClick}>{item.subjectName}</td>
                </Link>

                <td><div className={cls.anotherDiv}>{item.systemType}</div></td>
                {!editMode && (
                    <td>
                        <Button
                            extraClass={cls.buttonHelper}
                            children={<i className={"fas fa-pencil"}></i>}
                            onClick={() => onEditClick(item)}
                        />
                    </td>
                )}
            </tr>
        ));
    };

    return (
        <Table>
            <thead className={cls.theadBody}>
            <tr>
                <th>№</th>
                <th>Kasblar nomi</th>
                <th>System turi</th>
                {!editMode && <th>Actions</th>}
            </tr>
            </thead>
            <tbody>
            {renderVacancies()}
            </tbody>
        </Table>
    );
};
