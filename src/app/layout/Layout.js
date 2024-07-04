import React from 'react';
import {Outlet} from "react-router";


import {Menubar} from "widgets/menuBar";
import {Header} from "widgets/header";


import cls from "app/layout/Layout.module.sass"


export const Layout = () => {


    return (
        <>
            <Header/>
            <main className={cls.main}>
                <Menubar/>
                <div className={cls.main__content}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};