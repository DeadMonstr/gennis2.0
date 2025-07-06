import React from 'react';

import cls from "./newHomeCurriculum.module.sass";
import image from "shared/assets/images/curcilurum.png";

const card = [
    {
        title: "🧒 Boshlang‘ich sinflar (1–4 sinf)",
        desc: `O‘quvchilar o‘qish, yozish, matematika va atrof-muhitni o‘rganadilar. Ijodiy fikrlash, \n muloqot va mustaqil o‘rganish ko‘nikmalari shakllantiriladi. Rasm, musiqa va \n jismoniy tarbiya darslari mavjud.`
    },{
        title: "🧑‍🎓 Yuqori sinflar (10–11 sinf)",
        desc: "Tanlangan yo‘nalishlar bo‘yicha chuqurlashtirilgan ta’lim beriladi. IELTS, SAT, \n DTM imtihonlariga tayyorgarlik ko‘riladi. Amaliy darslar va kasbga yo‘naltirish \n mavjud.",
        cardBg: "#CAA77F",
        lgColor: "#000000",
        lgBg: "#FFFFFF"
    },{
        title: "👧 O‘rta sinflar (5–9 sinf)",
        desc: "Asosiy fanlar chuqurroq o‘rgatiladi: ingliz tili, matematika, biologiya, informatika va \n boshqalar. Tanqidiy fikrlash rivojlantiriladi. Klub darslari va loyihalar orqali amaliy \n ko‘nikmalar beriladi."
    },
]

export const NewHomeCurriculum = () => {

    const render = () => {
        return card.map(item => (
            <div className={cls.cards__item} style={{background: item.cardBg}}>
                <div className={cls.avatar} style={{background: item.lgBg}}>
                    <i style={{color: item.lgColor}} className="fa-solid fa-book-open"/>
                </div>
                <div className={cls.info}>
                    <h2 className={cls.info__title} style={{color: item.lgBg}}>{item.title}</h2>
                    <p className={cls.info__desc} style={{color: item.lgBg}}>
                        {item.desc.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        ))
    }

    return (
        <div className={cls.curriculum}>
            <div className={cls.curriculum__image}>
                <img className={cls.image} src={image} alt=""/>
                <div className={cls.info}>
                    <div className={cls.info__avatar}>
                        ★
                    </div>
                    <p className={cls.info__text}>
                        Ta’lim uch tilda olib boriladi. Har bir <br/>
                        o‘quvchiga individual yondashiladi. Interaktiv <br/>
                        metodlar, laboratoriya va kutubxona mavjud.
                    </p>
                </div>
            </div>
            <div className={cls.curriculum__container}>
                <div className={cls.header}>
                    <p className={cls.header__subTitle}>Curriculum Overview</p>
                    <h1 className={cls.header__title}>O‘quv dasturimiz haqida umumiy <br/> ma’lumot</h1>
                    <p className={cls.header__desc}>
                        Turon xalqaro maktabi o‘quvchilarga zamonaviy va muvozanatli bilim <br/>
                        beruvchi, xalqaro talablar va milliy qadriyatlarga asoslangan o‘quv <br/>
                        dasturini taklif etadi.
                    </p>
                </div>
                <div className={cls.cards}>
                    {render()}
                </div>
            </div>
        </div>
    );
};
