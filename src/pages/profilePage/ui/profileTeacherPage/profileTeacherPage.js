import React, {createContext, useState} from 'react';
import classNames from "classnames";

import {TeacherProfileInfo, TeacherProfileTeachersGroup} from "entities/profile/teacherProfile";
import {
    StudentProfileInfo,
    StudentProfileTotalAmount
} from "entities/profile/studentProfile"
import {TeacherEdit} from "features/profileEdits/teacherEdit";

import cls from "./profileTeacherPage.module.sass"

export const ContextStuPro = createContext(null)

export const ProfileTeacherPage = () => {

    const [active, setActive] = useState(false)
    const [actives, setActives] = useState(false)


    return (
        // <ContextStuPro.Provider value={}>
            <div
                className={classNames(cls.profile, {
                    [cls.active]: active
                })}
            >
                <TeacherProfileInfo
                    setActive={setActive}
                    active={active}
                />

                {/*// actives={actives}*/}
                {/*// setActives={setActives}*/}

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
        // </ContextStuPro.Provider>

    );
};
