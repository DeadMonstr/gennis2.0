import React, {useState} from 'react';
import classNames from "classnames";

import {
    GroupProfileInfo,
    GroupProfileTeacher,
    GroupProfileStudents,
    GroupProfileStatistics,
    GroupProfileAttendance,
    GroupProfileSubjectList,
    GroupProfileMore
} from "entities/profile/groupProfile";

import cls from "./groupProfilePage.module.sass";
import {GroupProfileModalTeachers} from "../../../../features/groupProfile";

export const GroupProfilePage = () => {

    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState("")

    return (
        <div className={cls.profile}>
            <GroupProfileInfo/>
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <GroupProfileTeacher setActive={setActiveModal}/>
                <GroupProfileStudents/>
                <GroupProfileStatistics/>
                <GroupProfileAttendance/>
                <GroupProfileSubjectList/>
                <GroupProfileMore/>
            </div>
            <GroupProfileModalTeachers
                active={activeModal === "changeTeacher"}
                setActive={setActiveModal}
            />
        </div>
    )
}
