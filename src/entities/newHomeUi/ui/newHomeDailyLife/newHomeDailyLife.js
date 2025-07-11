import React from 'react';

import cls from "./newHomeDailyLife.module.sass";
import image1 from "shared/assets/images/dailyLife1.jpg";
import image2 from "shared/assets/images/dailyLife2.jpg";
import image3 from "shared/assets/images/dailyLife3.jpg";
import image4 from "shared/assets/images/dailyLife4.jpg";
import image5 from "shared/assets/images/dailyLife5.jpg";
import image6 from "shared/assets/images/dailyLife6.jpg";
import image7 from "shared/assets/images/dailyLife7.jpg";
import image8 from "shared/assets/images/dailyLife8.jpg";

export const NewHomeDailyLife = () => {
    return (
        <div id={'slider'} className={cls.dailyLife}>
            <div className={cls.dailyLife__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>Turon Xalqaro Maktabi</span>
                    hayotidan lahzalar
                </h1>
                <p className={cls.desc}>
                    Farzandingiz qanday muhitda o‘qiyotgani, qanday
                    faoliyatlarda ishtirok etayotgani bilan yaqindan tanishing.
                    Suratlar orqali biz sizga maktab hayotidagi tabiiy,
                    quvonchli va ilhomli daqiqalarni taqdim etamiz.
                </p>
            </div>
            <div className={cls.dailyLife__container}>
                <img className={cls.image} src={image1} alt=""/>
                <img className={cls.image} src={image2} alt=""/>
                <img className={cls.image} src={image3} alt=""/>
                <img className={cls.image} src={image4} alt=""/>
                <img className={cls.image} src={image5} alt=""/>
                <img className={cls.image} src={image6} alt=""/>
                <img className={cls.image} src={image7} alt=""/>
                <img className={cls.image} src={image8} alt=""/>
            </div>
        </div>
    );
};
