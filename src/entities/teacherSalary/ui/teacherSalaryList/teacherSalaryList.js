import React from 'react';
import { Table } from "shared/ui/table";
import cls from './teacherSalaryList.module.sass'
import {Link} from "../../../../shared/ui/link";
export const TeacherSalaryList = ({ currentTableData, currentPage, PageSize }) => {
    const renderStudents = () => {
        return currentTableData?.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.total_salary}</td>
                <td>{item.taken_salary}</td>
                <td>{item.remaining_salary}</td>
                <td>{item.date}</td>
            </tr>
        ));
    };

    return (
        <Link to={"/platform/giveSalaryPage"}>
            <Table>
                <thead className={cls.theadBody}>
                <tr>
                    <th>№</th>
                    <th>Umumiy oylik</th>
                    <th>Olingan oylik</th>
                    <th>Qolgan oylik</th>
                    <th>Sana</th>
                </tr>
                </thead>
                <tbody>
                {renderStudents()}
                </tbody>
            </Table>
        </Link>

    );
};
