import React from 'react';

import cls from "./layoutTarget.module.sass"
import logo from "shared/assets/logo/turonLogo.png"
import logoText from "shared/assets/logo/turonLogoText.png"

const LayoutTarget = ({children}) => {
    return (
        <div className={cls.layoutTarget}>
            <div className={cls.header}>
                <div className={cls.logo}>
                    <img src={logo} alt="logo"/>
                    <img src={logoText} alt="logoText"/>
                </div>


                <div className={cls.lang}>

                </div>
            </div>

            {children}

            <div className={cls.footer}>

            </div>
        </div>
    );
};

export default LayoutTarget;