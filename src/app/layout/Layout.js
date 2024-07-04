import React from 'react';


import cls from "app/layout/Layout.module.sass"
import {Navbar} from "widgets/Navbar";
import {Outlet} from "react-router";



const Layout = () => {

    return (
        <div className={cls.layout}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;