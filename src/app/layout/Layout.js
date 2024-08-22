import React, {useEffect} from 'react';
import {Outlet} from "react-router";
import {useDispatch, useSelector} from "react-redux";


import {Menubar} from "widgets/menuBar";
import {Header} from "widgets/header";
import {fetchUserProfileData} from "pages/profilePage";
import {getUserId, getUserRefreshLoading} from "pages/loginPage";


import cls from "app/layout/Layout.module.sass"


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