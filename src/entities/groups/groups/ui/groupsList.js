import React from 'react';
import {useNavigate} from "react-router";

import {Table} from "shared/ui/table";

import cls from "./groupsList.module.sass";

export const GroupsList = React.memo(({currentTableData}) => {

    const navigate = useNavigate()

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
                <tbody>
                {
                    currentTableData?.map((item, i) => {
                        return (
                            <tr onClick={() => navigate(`groupInfo/${item.id}`)}>
                                <td>{i + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.name} {item?.surname}</td>
                                <td>{item?.subject?.name}</td>
                                <td>{item?.course_types?.name}</td>
                                <td>{item?.price}</td>
                                <td>{item?.status ? <div><div/></div> : null }</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    );
})