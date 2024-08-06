import React from 'react';
import {useSelector} from "react-redux";

import {
    UserProfileInfo,
    UserProfileSalaryList
} from "entities/profile/userProfile";
import {getUserSalaryData} from "../../model/selector/userProfileSelector";

import cls from "./userProfilePage.module.sass";

export const UserProfilePage = () => {

    const salaryData = useSelector(getUserSalaryData)

    return (
        <div className={cls.userProfilePage}>
            <UserProfileInfo/>
            <UserProfileSalaryList data={salaryData}/>
        </div>
    )
}
