import React, { useState } from 'react';

import {
    ProfileInfo,
    ProfileTotalAmount,
    ProfileTeachersGroup,
} from "entities/profile";
import {TeacherEdit} from "../../../features/profileEdits/teacherEdit";

import cls from "./profileTeacherPage.module.sass"
import classNames from "classnames";

export const ProfileTeacherPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)

    return (
        <div
            className={classNames(cls.profile, {
                [cls.active]: active
            })}
        >
            <ProfileInfo
                setActive={setActive}
                active={active}
                actives={actives}
                setActives={setActives}

            />
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <ProfileTeachersGroup/>
                <TeacherEdit
                    active={active}
                    setActive={setActive}

                />
            </div>
            {/*<div className={classNames(cls.profile__otherContent, {*/}
            {/*    [cls.active]: active*/}
            {/*})}>*/}
            {/*    <ProfileTotalAmount/>*/}
            {/*</div>*/}
        </div>
    );
};
