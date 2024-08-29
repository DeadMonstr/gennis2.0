import React, {useEffect} from 'react';
import {Outlet} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {Menubar} from "widgets/menuBar";
import {Header} from "widgets/header";
import {fetchUserProfileData} from "entities/profile/userProfile";
import {getUserId, getUserRefreshLoading} from "pages/loginPage"

import cls from "./Layout.module.sass"
import {Alert} from "features/alert";


export const Layout = () => {

    const dispatch = useDispatch()
    const userId = useSelector(getUserId)
    const refreshLoading = useSelector(getUserRefreshLoading)

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
                <Header/>

                <div className={cls.main__content}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};

export default Layout;