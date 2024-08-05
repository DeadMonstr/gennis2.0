import React from 'react';

import {UserProfileInfo} from "entities/profile/userProfile";

import cls from "./userProfilePage.module.sass";

export const UserProfilePage = () => {
    return (
        <div className={cls.userProfilePage}>
            <UserProfileInfo/>
        </div>
    )
}
