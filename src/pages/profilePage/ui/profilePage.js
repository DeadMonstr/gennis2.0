import React from 'react';

import {
    ProfileInfo,
    ProfileRating,
    ProfileReward,
    ProfileSubjects,
    ProfileTeachers,
    ProfileAttendance
} from "entities/profile";

import cls from "./profilePage.module.sass"

export const ProfilePage = () => {
    return (
        <div className={cls.profile}>
            <ProfileInfo/>
            <ProfileTeachers/>
            <ProfileRating/>
            <ProfileReward/>
            <ProfileSubjects/>
            <ProfileAttendance/>
        </div>
    );
};
