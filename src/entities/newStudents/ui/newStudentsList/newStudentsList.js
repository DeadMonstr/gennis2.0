import React from 'react';
import { Table } from "shared/ui/table";
import cls from './newStudentsList.module.sass'
export const NewStudentsList = ({ currentTableData, currentPage, PageSize }) => {
    const renderStudents = () => {
        return currentTableData.map((item, index) => (
            <tr key={index + 1}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.surname} {item.name}</td>
                <td>{item.age}</td>
                <td>{item.tel}</td>
                <td>{item.lang}</td>
                <td>{item.group}</td>
                <td>{item.dataReg}</td>
            </tr>
        ));
    };

    return (
        <Table>
            <thead className={cls.theadBody}>
            <tr>
                <th>№</th>
                <th>Full name</th>
                <th>Age</th>
                <th>Tel</th>
                <th>Til</th>
                <th>Guruh</th>
                <th>Reg. sana</th>
            </tr>
            </thead>
            <tbody>
            {renderStudents()}
            </tbody>
        </Table>
    );
};
