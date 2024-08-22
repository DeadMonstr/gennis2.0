import React from 'react';
import { Table } from "shared/ui/table";
import cls from './teacherSalaryList.module.sass';
import { Link } from "../../../../shared/ui/link";

export const TeacherSalaryList = ({ currentTableData, currentPage, PageSize }) => {
    const safeData = Array.isArray(currentTableData) ? currentTableData : [currentTableData];

    const renderStudents = () => {
        return safeData.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <Link to={`giveTeacherSalaryPage/${item?.id}`}>
                    <td>{item?.total_salary}</td>
                </Link>
                <td>{item?.taken_salary}</td>
                <td>{item?.remaining_salary}</td>
                <td>{item?.month_date}</td>
            </tr>
        ));
    };

    return (
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
    );
};
