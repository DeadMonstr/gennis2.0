import React from 'react';

import {Table} from "shared/ui/table";

import cls from "./groupsList.module.sass";

export const GroupsList = React.memo(({currentTableData}) => {
    return (
        <>

            <Table extraClass={cls.table__head}>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Guruh Nomi</th>
                    <th>Full name</th>
                    <th>Fan</th>
                    <th>Kurs Turi</th>
                    <th>Guruh narxi</th>
                    <th>Status</th>
                </tr>
                </thead>
                {
                    currentTableData.map((item, i) => {
                        return (
                            <tbody>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.groupName}</td>
                                <td>{item.name} {item.surname}</td>
                                <td>{item.subject}</td>
                                <td>{item.typeCourse}</td>
                                <td>{item.groupPrice}</td>
                                <td>{item.status ?<div><div/></div> : null }</td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </>
    );
})