import React from 'react';

import cls from "./newHomeParentsComment.module.sass";
import image1 from "shared/assets/images/parents1.jpg";
import image2 from "shared/assets/images/parents1.jpg";
import image3 from "shared/assets/images/parents3.jpg";

const list = [
    {
        image: image1,
        title: "Hellen Jummy"
    },
    {
        image: image2,
        title: "Ralph Edwards"
    },
    {
        image: image3,
        title: "Hellena John"
    }
]

export const NewHomeParentsComment = () => {
    const render = () => {
        return list.map(item => (
            <div
                className={cls.card}
            >
                <p className={cls.card__text}>
                    “Ikkita qizim ham shu maktabda tahsil oladi. Ikkalasining ham individual yondashuv asosida o‘sishini
                    kuzatyapmiz. Birining qiziqishi san’atga, ikkinchisining esa fanlarga – maktab ikkalasini ham
                    qo‘llab-quvvatlayapti. Har bir bola e’tiborda
                </p>
                <div className={cls.card__profile}>
                    <img className={cls.avatar} src={item.image} alt=""/>
                    <div className={cls.info}>
                        <h2 className={cls.info__title}>{item.title}</h2>
                        <p className={cls.info__desc}>Ota-ona</p>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className={cls.fileDownload} id={"parentsComment"}>
            <div className={cls.fileDownload__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>Biz haqimizda</span>
                    eng haqqoniy <br/>
                    fikrlar — bevosita ota-onalar va <br/>
                    o‘quvchilardan
                </h1>
                <p className={cls.subTitle}>
                    Maktabimiz haqida eng yaxshi fikrlar — bu biz bilan <br/>
                    bevosita tajriba orttirgan insonlarning samimiy <br/>
                    so‘zlari. Quyida ularning maktab hayoti haqidagi <br/>
                    fikrlari bilan tanishing:
                </p>
            </div>
            <div className={cls.fileDownload__container}>
                {render()}
            </div>
        </div>
    );
};
