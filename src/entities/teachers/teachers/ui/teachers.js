import React, {memo, useMemo, useState} from 'react';
import cls from "./teachers.module.sass"

import {Table} from "shared/ui/table";
import {Input} from "../../../../shared/ui/input";
import {set} from "react-hook-form";



export const teachersData = [
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
         status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
         status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
         status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
         status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,

        subject: "none",
        status: true
    },
    {
        name: "sardor",
        surname: "ikromov",
        username: "ikromovvv",
        number: 123123,
        age: 17,
        subject: "none",
        status: false,


    },

]
export const Teachers = memo(({data}) => {
    const [checkbox , setCheckbox] = useState(false)

    const checkBoxChange = (id) =>{
        setCheckbox(id)
        console.log(id)

    }

    const renderTeacher = () => {
        return data.map((item, i) => (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.username}</td>
                <td>{item.number}</td>
                <td>{item.age}</td>
                <td>{item.subject}</td>
                <td>
                    {item.status ? <div className={cls.status}>
                        <Input onChange={() => checkBoxChange(i)}  type={"checkbox"}/>
                        <div className={cls.status_circle}><div/></div>
                    </div> : null}
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
                    <tbody>
                    {renderTeacher()}
                    </tbody>
                </Table>
            </div>


        </div>
    )
})

