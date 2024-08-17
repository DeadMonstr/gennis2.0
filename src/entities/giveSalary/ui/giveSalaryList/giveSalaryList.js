import React from 'react';
import { Table } from "shared/ui/table";
import cls from './giveSalaryList.module.sass'
import {Link} from "shared/ui/link";
export const GiveSalaryList = ({ currentTableData, currentPage, PageSize }) => {
    const renderStudents = () => {
        return currentTableData?.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.salary}</td>
                <td>{item.payment_types.name}</td>
                <td>{item.comment}</td>
                <td>{item.date}</td>
            </tr>
        ));
    };

    return (
            <Table>
                <thead className={cls.theadBody}>
                <tr>
                    <th>№</th>
                    <th>Summa</th>
                    <th>Summa turi</th>
                    <th>Komment</th>
                    <th>Sana</th>
                </tr>
                </thead>
                <tbody>
                {renderStudents()}
                </tbody>
            </Table>

    );
};
