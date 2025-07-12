import React from 'react';

import cls from "./newHomeCoreValues.module.sass";
import image from "shared/assets/images/coreValues.png";
import image1 from "shared/assets/images/coreValues1.png";
import image2 from "shared/assets/images/coreValues2.png";
import image3 from "shared/assets/images/coreValues3.png";
import image4 from "shared/assets/images/coreValues4.png";

const card = [
    {
        image: image1,
        title: "Ilmga muhabbat",
        desc: `Farzandlarimizda o‘rganishga bo‘lgan qiziqishni uyg‘otamiz va \n ilmiy tafakkurni rivojlantiramiz.`
    }, {
        image: image2,
        title: "Hurmat va mas’uliyat",
        desc: "Boshqalarga hurmat, o‘ziga va jamiyatga mas’uliyat hissini \n shakllantiramiz.",
        // lgColor: "#000000",
    }, {
        cardBg: "#CAA77F",
        lgBg: "#000",
        image: image3,
        title: "Innovatsiya va texnologiya",
        desc: "Zamonaviy texnologiyalar orqali ta’limni amaliy va interaktiv \n qilishga intilamiz."
    }, {
        image: image4,
        title: "Ijodkorlik va tanqidiy fikrlash",
        desc: "O‘quvchilarning fikrlashi, savol berishi va yechim topa olishini \n rag‘batlantiramiz."
    }
]

export const NewHomeCoreValues = () => {

    const render = () => {
        return card.map(item => (
            <div className={cls.cards__item} style={{background: item.cardBg}}>
                <div className={cls.avatar}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={cls.info}>
                    <h2 className={cls.info__title} style={{color: item.lgBg}}>{item.title}</h2>
                    <p className={cls.info__desc} style={{color: item.lgBg}}>
                        {item.desc.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        ))
    }

    return (
        <div className={cls.coreValues} id={"coreValues"}>
            <div className={cls.coreValues__container}>
                <div className={cls.header}>
                    <p className={cls.header__subTitle}>Asosiy Qadriyatlarimiz</p>
                    <h1 className={cls.header__title}>
                        Farzandingiz nafaqat bilim, balki <br/>
                        hayotda kerakli fazilatlarni ham <br/>
                        o‘rganadi
                    </h1>
                    {
                        window.innerWidth <= 430
                            ? <img className={cls.header__image} src={image} alt=""/>
                            : <p className={cls.header__desc}>
                                Maktabimizda har bir bola bilim bilan birga hayotiy qadriyatlarni <br/>
                                ham o‘zlashtiradi – halollik, ijodkorlik va mas’uliyat.
                            </p>
                    }
                </div>
                <div className={cls.cards}>
                    {render()}
                </div>
            </div>
            <div className={cls.coreValues__image}>
                <img className={cls.image} src={image} alt=""/>
            </div>
        </div>
    );
};
