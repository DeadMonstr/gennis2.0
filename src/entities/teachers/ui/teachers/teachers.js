import React, {memo, useMemo, useState} from 'react';
import cls from "./teachers.module.sass"

import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {set} from "react-hook-form";
import {Link} from "../../../../shared/ui/link";
import {DefaultPageLoader} from "../../../../shared/ui/defaultLoader";


export const Teachers = memo(({data, loading}) => {
    const [checkbox, setCheckbox] = useState(false)


    const checkBoxChange = (id) => {
        setCheckbox(id)
        console.log(id)
    }


    const renderTeacher = () => {
        return data.map((item, i) => (
            <tr key={i}>
                <td>{i + 1}</td>
                <Link to={`teacherProfile/${item.id}`}>
                    <td>{item.user.name === "tok" || item.user.name === "tot" ? null : item.user.name} {item.user.surname}</td>
                </Link>

                <td>{item.user.username}</td>
                <td>{item.user.phone}</td>
                <td>{item.age}</td>
                <td>
                    <div className={item.subject ? cls.teacher__language : null}>{item.subject.name}</div>
                </td>


            </tr>
        ))
    }
    const render = renderTeacher()

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
                        <tbody>
                        {render}
                        </tbody>
                </Table>
            </div>


        </div>
    )
})

