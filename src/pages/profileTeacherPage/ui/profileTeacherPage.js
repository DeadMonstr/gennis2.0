import React, { useState } from 'react';
import classNames from "classnames";

import {
    TeacherProfileInfo,
    TeacherProfileTotalAmount,
    TeacherProfileTeachersGroup,
} from "entities/profile";
import {TeacherEdit} from "features/profileEdits/teacherEdit";

import cls from "./profileTeacherPage.module.sass"

export const ProfileTeacherPage = () => {


    const [active, setActive] = useState(false)
    return (
        <div
            className={classNames(cls.profile, {
                [cls.active]: active
            })}

        >
            <TeacherProfileInfo
                setActive={setActive}
                active={active}

            />
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
            <div className={classNames(cls.profile__otherContent, {
                [cls.active]: active
            })}>
                <TeacherProfileTotalAmount/>
            </div>
        </div>
    );
};
