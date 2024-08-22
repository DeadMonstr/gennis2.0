import React, {memo} from 'react';

import {Input} from "shared/ui/input";
import {Table} from "shared/ui/table";
import {Modal} from "shared/ui/modal";
import {Switch} from "shared/ui/switch";

import cls from "./groupProfileModalTeachers.module.sass";
import defaultUserImg from "shared/assets/images/user_image.png";

const data = [
    {
        name: "Mahmud",
        surname: "Yo`Ldoshev",
        subjects: ["Ingliz Tili"],
        status: false
    },
    {
        name: "Mahmud",
        surname: "Yo`Ldoshev",
        subjects: ["Ingliz Tili"],
        status: true
    },
    {
        name: "Mahmud",
        surname: "Yo`Ldoshev",
        subjects: ["Ingliz Tili"],
        status: false
    },
    {
        name: "Mahmud",
        surname: "Yo`Ldoshev",
        subjects: ["Ingliz Tili"],
        status: true
    }
]

export const GroupProfileModalTeachers = memo((props) => {

    const {
        active,
        setActive
    } = props

    const renderTeachers = () => {
        return data.map(item =>
            <tr>
                <td>
                    <img src={defaultUserImg} alt=""/>
                </td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>
                    {
                        item.subjects.map(i =>
                            <div className={cls.teachers__subject}>{i}</div>
                        )
                    }
                </td>
                <td>
                    <Switch activeSwitch={item.status}/>
                </td>
            </tr>
        )
    }

    const render = renderTeachers()

    return (
        <Modal
            active={active}
            setActive={setActive}
            extraClass={cls.teachers}
        >
            <Input
                placeholder={"Search"}
            />
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Ism</th>
                        <th>Familya</th>
                        <th>Fanlar</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>
        </Modal>
    )
})
