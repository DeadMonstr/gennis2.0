import React, {memo, useMemo, useState} from 'react';
import cls from "./teachers.module.sass"

import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {set} from "react-hook-form";
import {useNavigate} from "react-router";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";


export const Teachers = memo(({data, loading}) => {
    const [checkbox, setCheckbox] = useState(false)

    const navigation = useNavigate()

    const checkBoxChange = (id) => {
        setCheckbox(id)
        console.log(id)

    }


    const renderTeacher = () => {
        return data.map((item, i) => (
            <tr key={i} onClick={() => navigation(`teacherProfile/${item.id}`)}>
                <td>{i + 1}</td>
                <td>{item.user.name} {item.user.surname}</td>
                <td>{item.user.username}</td>
                <td>{item.user.phone}</td>
                <td>{item.user.age}</td>
                <td>
                    {item.subject ?  <div className={item.subject ? cls.teacher__language : null}>{item.subject.name}</div> : null}

                </td>
            </tr>
        ))
    }
    return (
        <div className={cls.teacher}>

            <div className={cls.table}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full name</th>
                        <th>Username</th>
                        <th>Tel</th>
                        <th>Yosh</th>
                        <th>Fan</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {/*{loading ?*/}
                    {/*    <DefaultPageLoader/>*/}
                    {/*    :*/}
                        <tbody>
                        {renderTeacher()}
                        </tbody>
                    {/*}*/}
                </Table>
            </div>


        </div>
    )
})

