import React, {useState} from 'react';

import {
    ProfileInfo,
    ProfileRating,
    ProfileReward,
    ProfileSubjects,
    ProfileTeachers,
    ProfileAttendance,
    ProfileTotalAmount
} from "entities/profile";

import cls from "./profilePage.module.sass"
import classNames from "classnames";

export const ProfilePage = () => {

    const [active, setActive] = useState(false)

    return (
        <div
            className={classNames(cls.profile, {
                [cls.active]: active
            })}
        >
            <ProfileInfo
                setActive={setActive}
                active={active}
            />
            <div
                className={classNames(cls.profile__mainContent, {
                    [cls.active]: active
                })}
            >
                <ProfileTeachers/>
                <ProfileRating/>
                <ProfileReward/>
                <ProfileSubjects/>
                <ProfileAttendance/>
            </div>
            <div className={classNames(cls.profile__otherContent, {
                [cls.active]: active
            })}>
                <ProfileTotalAmount/>
            </div>
        </div>
    );
};
