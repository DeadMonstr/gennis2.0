import React from 'react';

import cls from "./layoutTarget.module.sass"
import logo from "shared/assets/logo/logoMain.svg"
import telegramIcon from "shared/assets/icons/telegram.svg";
import instagramIcon from "shared/assets/icons/instagram.svg";
import youtubeIcon from "shared/assets/icons/youtube.svg";
import facebookIcon from "shared/assets/icons/facebook.svg";
import {TargetChildren} from "entities/targetItems";
import LangSwitcher from "features/langSwitcher/ui/LangSwitcher";

const LayoutTarget = ({children}) => {


    const icons = [telegramIcon, instagramIcon, youtubeIcon, facebookIcon]




    return (
        <div className={cls.layoutTarget}>
            <div className={cls.header}>
                <div className={cls.logo}>
                    <img src={logo} alt="logo"/>
                </div>


                <div className={cls.lang}>
                    <LangSwitcher/>
                </div>
            </div>
            <TargetChildren/>
            {children}

            <div className={cls.footer}>



                <div className={cls.footer_header}>
                    <h1>
                        Bizga obuna bo'ling
                    </h1>
                    <span>
                        Biz siz uchun qiziqarli materiallar e’lon qilamiz!
                    </span>
                </div>

                <div className={cls.icons}>
                    {icons.map(item => (<div className={cls.icons__item}>
                        <img src={item} alt=""/>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default LayoutTarget;