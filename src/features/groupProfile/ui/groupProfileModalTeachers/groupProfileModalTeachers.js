import React, {memo, useState} from 'react';
import {useSelector} from "react-redux";

import {EditableCard} from "shared/ui/editableCard";
import {Input} from "shared/ui/input";
import {Table} from "shared/ui/table";
import {Modal} from "shared/ui/modal";
import {Switch} from "shared/ui/switch";
import {getGroupProfileData} from "entities/profile/groupProfile";

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

export const GroupProfileModalTeachers = memo(() => {

    const profileData = useSelector(getGroupProfileData)
    const [active, setActive] = useState(false)

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
                            <div className={cls.teachersModal__subject}>{i}</div>
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
        <>
            <EditableCard
                extraClass={cls.teacher}
                // titleType={"beetwean"}
                title={<i className="fas fa-edit"/>}
                onClick={() => setActive(true)}
            >
                <h1>O’qituvchilari</h1>
                <div className={cls.teacher__container}>
                    <div className={cls.teacher__info}>
                        <img
                            className={cls.teacher__image}
                            src={
                                profileData?.teacher[0]?.user?.profile_img ??
                                defaultUserImg}
                            alt=""
                        />
                        <h2 className={cls.teacher__name}>
                            <span>
                            {profileData?.teacher[0]?.user?.name}
                            </span>
                            <span>
                            {profileData?.teacher[0]?.user?.surname}
                            </span>
                        </h2>
                    </div>
                    <div className={cls.teacher__share}>
                        <p>O’qituvchi ulushi:</p>
                        <p className={cls.teacher__money}>{profileData?.teacher_salary}</p>
                    </div>
                </div>
            </EditableCard>
            <Modal
                active={active}
                setActive={setActive}
                extraClass={cls.teachersModal}
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
        </>
    )
})
