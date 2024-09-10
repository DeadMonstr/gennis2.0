import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useMatches, useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {Menubar} from "widgets/menuBar";
import {Header} from "widgets/header";
import {fetchUserProfileData} from "entities/profile/userProfile";
import {getUserId, getUserRefreshLoading} from "pages/loginPage"

import cls from "./Layout.module.sass"
import {Alert} from "features/alert";
import {getLocations, getSelectedLocations} from "features/locations";
import {getBranch} from "features/branchSwitcher";
import {getSystem} from "features/themeSwitcher";
import {getBranchStatus} from "features/branchSwitcher/model/selector/brachSwitcherSelector";


export const Layout = () => {




    const userId = useSelector(getUserId)
    const refreshLoading = useSelector(getUserRefreshLoading)








    const dispatch = useDispatch()

    // const system = useSelector(getSystem)

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserProfileData(userId))
        }
    }, [userId, refreshLoading])


    return (
        <>
            <Alert/>
            <Menubar/>
            <main className={cls.main}>



                <div className={cls.main__content}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};



