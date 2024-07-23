import React, {memo, useContext} from 'react';
import classNames from "classnames";

import {EditableCard} from "shared/ui/editableCard";
import {Table} from "shared/ui/table";
import {ContextStuPro} from "pages/profilePage";

import cls from "./studentProfileGroupsHistory.module.sass";

const list = [
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    },
    {
        groupName: "Eb19103",
        addedDate: "2024-04-16",
        exitedDate: "2024-04-16",
        reason: "",
        studentFullName: "ShoxistaYusupova"
    }
]

export const StudentProfileGroupsHistory = memo(() => {

    const {active, setActive} = useContext(ContextStuPro)

    const renderGroupsHistory = () => {
        return list.map(item =>
            <tr>
                <td/>
                <td>{item.groupName}</td>
                <td>{item.addedDate}</td>
                <td>{item.exitedDate}</td>
                <td>{item.reason}</td>
                <td>{item.studentFullName}</td>
            </tr>
        )
    }

    const render = renderGroupsHistory()

    return (
        <EditableCard
            extraClass={classNames(cls.history, {
                [cls.active]: active === "groupsHistory"
            })}
            titleType={"cross"}
            onClick={() => setActive("")}
        >
            <div className={cls.history__container}>
                <h1>Guruhlar tarixi</h1>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Gruppa nomi</th>
                            <th>Qo’shilgan kunni</th>
                            <th>Chiqib ketgan kuni</th>
                            <th>Sabab</th>
                            <th>O'qituvchi ism familiyasi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {render}
                        </tbody>
                    </Table>
                </div>
            </div>
        </EditableCard>
    )
})
