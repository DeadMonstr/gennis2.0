import React from 'react';

import cls from "./newHomePrincipal.module.sass";
import image from "shared/assets/images/principal.jpg";

const list = [1, 2, 3]

export const NewHomePrincipal = () => {

    const render = () => {
        return list.map(item => (
            <div className={cls.card}>
                <div className={cls.card__header}>
                    <img className={cls.image} src={image} alt=""/>
                    <p className={cls.info}>25-avgust, 2025</p>
                </div>
                <h2 className={cls.card__title}>Yangi o‘quv yili ochilish marosimi</h2>
                <p className={cls.card__text}>
                    Turon Xalqaro Maktabida o‘quv yilining har bir bosqichi muhim va <br/>
                    mazmunli tadbirlar bilan boyitiladi. Yaqinlashib kelayotgan voqealar <br/>
                    – bu o‘quvchilarimiz uchun yangi tajribalar, iqtidorni namoyon etish, <br/>
                    jamoaviy ruhni mustahkamlash va ota-onalar bilan hamkorlikni <br/>
                    chuqurlashtirish imkoniyatidir.
                </p>
            </div>
        ))
    }


    return (
        <div className={cls.principal} id={"events"}>
            <div className={cls.principal__header}>
                <h1 className={cls.title}>Bo‘lib o‘tadigan tadbirlar</h1>
                <p className={cls.subTitle}>
                    Maktab hayotidagi yaqinlashib kelayotgan muhim sanalar va voqealar <br/>
                    bilan tanishing. Har bir tadbir – yangi imkoniyat va ilhom manbai!
                </p>
            </div>
            <div className={cls.principal__container}>
                {render()}
            </div>
        </div>
    );
};
