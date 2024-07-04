import React from 'react';


import {SearchPlatformInput} from "features/searchInput";
import GetLocation from "features/getLocation/getLocation";
import {MainSwitch} from "shared/ui/mainSwitch";


import cls from "./header.module.sass";
import logo from "shared/assets/images/logo.svg";

export const Header = () => {
    return (
        <header className={cls.head}>
            <div className={cls.head__logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={cls.head__search}>
                <SearchPlatformInput/>
            </div>
            <div className={cls.head__location}>
                <MainSwitch/>
                <GetLocation/>
            </div>
        </header>
    );
};