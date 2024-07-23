import React, { useState } from 'react';
import classNames from "classnames";

import {
    StudentProfileInfo,
    StudentProfileTotalAmount,
    TeacherProfileTeachersGroup,
} from "entities/profile";
import {TeacherEdit} from "features/profileEdits/teacherEdit";

import cls from "./profileTeacherPage.module.sass"


export const ProfileTeacherPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)

    return (
        <div
            className={classNames(cls.profile, {
                [cls.active]: active
            })}
        >
            <StudentProfileInfo/>
                // setActive={setActive}
                // active={active}
                // actives={actives}
                // setActives={setActives}

            {/*<ProfileInfo*/}
            {/*    setActive={setActive}*/}
            {/*    active={active}*/}
            {/*/>*/}
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <TeacherProfileTeachersGroup/>
                <TeacherEdit
                    active={active}
                    setActive={setActive}

                />
            </div>

        </div>
    );
};
