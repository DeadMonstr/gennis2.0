import React from 'react';


import cls from "./langSwitcher.module.sass"

import arrowDown from "shared/assets/icons/Trailing element-selected.svg"
import lang from "shared/assets/icons/language.svg"
import {onChange} from "features/studentPayment/model/studentPaymentSlice";
import {useTranslation} from "react-i18next";


const langs = [
    {
        value: "uz",
        label: "Uzb"
    },
    {
        value: "ru",
        label: "Rus"
    },
]


const LangSwitcher = () => {

    const {t, i18n} = useTranslation();


    const onChangeLanguage = (type) => {
        i18n.changeLanguage(type)
    }


    return (
        <div className={cls.switcher}>

            <div className={cls.switcher__lang}>
                <img src={lang} alt=""/>
                <span>Uzb</span>
                <img src={arrowDown} alt=""/>
            </div>

            <div className={cls.switcher__popup}>
                {
                    langs.map(item => {


                        return (
                            <div onClick={() => onChangeLanguage(item.value)} className={cls.item}>
                                {item.label}
                            </div>
                        )

                    })
                }

            </div>


        </div>
    );
};

export default LangSwitcher;