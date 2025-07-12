import React from 'react';

import cls from "./newHomeSchoolLife.module.sass";
import image1 from "shared/assets/images/schoolLife1.jpg"
import image2 from "shared/assets/images/schoolLife2.jpg"
import image3 from "shared/assets/images/schoolLife3.jpg"
import image4 from "shared/assets/images/schoolLife4.jpg"

const list = [
    {
        image: image1,
        subTitle: "🌐 Xalqaro fan olimpiadalari",
        title: "🥇 100+  olimpiadasi g‘olibi",
    },
    {
        image: image2,
        subTitle: "📚 Insho va til tanlovlarida",
        title: "📖 3ta milliy grant sohibi",
    },
    {
        image: image3,
        subTitle: "🤖 Robototexnika",
        title: "💡 50+ loyiha va startap",
    },
    {
        image: image4,
        subTitle: "🏆 Sport musobaqalar",
        title: "🥇 30+ xalqaro mukofot",
    },
]

export const NewHomeSchoolLife = () => {

    const render = () => {
        return list.map((item, index) => {
            if (index > 0 && window.innerWidth <= 430) return null
            return (
                <div className={cls.card}>
                    <div className={cls.card__header}>
                        <img className={cls.card__image} src={item.image} alt=""/>
                        <p className={cls.card__info}>{item.subTitle}</p>
                    </div>
                    <div className={cls.card__text}>
                        <h2 className={cls.title}>{item.title}</h2>
                        <p className={cls.desc}>100+ o‘quvchi biologiya, matematika va fizika yo‘nalishlarida xalqaro
                            olimpiadalarda g‘oliblikni qo‘lga kiritgan.</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={cls.schoolLife} id={"schoolLife"}>
            <div className={cls.schoolLife__header}>
                <div className={cls.title}>
                    <span className={cls.title__inner}>Maktab hayotidagi</span>
                    muhim zafarlar
                </div>
                <p className={cls.desc}>
                    Turon Xalqaro Maktabi qisqa vaqt ichida ta’lim sifati, o‘quv dasturlari va <br/>
                    o‘quvchilarning yutuqlari bo‘yicha O‘zbekistonning ilg‘or maktablari qatoridan o‘rin <br/>
                    oldi. Maktabimiz o‘quvchilari nafaqat mahalliy, balki xalqaro miqyosdagi tanlov, <br/>
                    olimpiada va loyihalarda faol ishtirok etib, bir qancha medallar, diplomlar va <br/>
                    grantlarga ega bo‘lishgan.
                </p>
            </div>
            <div className={cls.schoolLife__slider}>
                <p className={cls.title}>Turon Xalqaro Maktabi Yutuqlari Bilan Tanishing</p>
                <div className={cls.bars}>
                    <p style={{color: "#3E323280"}} className={cls.bars__inner}>{"<"}</p>
                    <p style={{color: "#3E3232"}} className={cls.bars__inner}>{">"}</p>
                </div>
            </div>
            <div className={cls.schoolLife__container}>
                {render()}
            </div>
        </div>
    );
};
