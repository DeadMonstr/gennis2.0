import React, {memo} from 'react';

import {Table} from "shared/ui/table";
import {EditableCard} from "shared/ui/editableCard";

import cls from "./groupProfileStudents.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";
import classNames from "classnames";

const data = [
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "yellow",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "green",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    },
    {
        status: "red",
        name: "Zinnora",
        surname: "Xolmurodova",
        money: 390000
    }
]

export const GroupProfileStudents = memo(() => {

    const renderStudents = () => {
        return data.map(item =>
            <tr>
                <td>
                    <div
                        className={cls.students__upper}
                        style={{backgroundColor: item.status}}
                    />
                </td>
                <td>
                    <img src="" alt=""/>
                </td>
                <td>{item.name} {item.surname}</td>
                <td>
                    <div
                        className={classNames(cls.students__money, {
                            [cls.red]: item.status === "red",
                            [cls.yellow]: item.status === "yellow",
                        })}
                    >
                        {item.money}
                    </div>
                </td>
            </tr>
        )
    }

    const render = renderStudents()

    return (
        <EditableCard
            extraClass={cls.students}
            title={<i className="fas fa-edit"/>}
        >
            <h1>O’quvchilar</h1>
            <div className={cls.students__list}>
                <Table>
                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>
        </EditableCard>
    )
})
