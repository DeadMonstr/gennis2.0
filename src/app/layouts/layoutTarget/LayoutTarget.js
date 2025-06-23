import React from 'react';

import cls from "./layoutTarget.module.sass"
import logo from "shared/assets/logo/logoMain.svg"
import telegramIcon from "shared/assets/icons/telegram.svg";
import instagramIcon from "shared/assets/icons/instagram.svg";
import youtubeIcon from "shared/assets/icons/youtube.svg";
import facebookIcon from "shared/assets/icons/facebook.svg";
import {TargetChildren} from "entities/targetItems";
import LangSwitcher from "features/langSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

const LayoutTarget = ({children}) => {


    const icons = [
        {
            icon: telegramIcon,
            link: "https://t.me/gennis_info"
        },
        {
            icon: instagramIcon,
            link: "https://www.instagram.com/genniscampus/"
        },
    ]

    const {t, i18n} = useTranslation();


    const navigate = useNavigate()


    const check = localStorage.getItem("check")

    return (
        <div className={cls.layoutTarget}>
            <div className={cls.header}>
                <div onClick={() => navigate("/")} className={cls.logo}>
                    <img src={logo} alt="logo"/>
                </div>


                <div className={cls.lang}>
                    <LangSwitcher/>
                </div>
            </div>
            {/*<TargetChildren/>*/}
            <div className={cls.wrapper}>
                {children}


                 <div className={cls.footer}>


                    <div className={cls.footer_header}>
                        <h1>
                            {t("footer.title")}
                        </h1>
                        <span>
                         {t("footer.subTitle")}
                    </span>
                    </div>

                    <div className={cls.icons}>
                        {icons.map(item => (<div className={cls.icons__item}>
                            <a href={`${item.link}`} target={"_blank"}><img src={item.icon} alt=""/></a>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutTarget;