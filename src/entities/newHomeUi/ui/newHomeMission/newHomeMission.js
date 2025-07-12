import React from 'react';

import cls from "./newHomeMission.module.sass";
import missionImg from "shared/assets/images/missionImg.png";
import visionImg from "shared/assets/images/visionImg.png";

export const NewHomeMission = () => {
    return (
        <div className={cls.mission} id={"missions"}>
            <div className={cls.mission__header}>
                <img className={cls.image} src={missionImg} alt=""/>
                <h1 className={cls.title}>
                    Missiya va Vizyon: Farzandingiz <br/>
                    uchun ishonchli yo‘nalish
                </h1>
                <div className={cls.btn}>
                    <div className={cls.btn__inner}>
                        <p>↓</p>
                    </div>
                </div>
            </div>
            <div className={cls.mission__container}>
                <div className={cls.info}>
                    <h1 className={cls.info__header}>
                        Ilm, innovatsiya <br/>
                        va orzu sari yo‘l
                    </h1>
                    <p className={cls.info__desc}>
                        Turon Xalqaro Maktabi o‘quvchilariga zamonaviy dunyo uchun <br/>
                        zarur bo‘lgan bilim, ko‘nikma va qadriyatlarni uyg‘unlashtirgan <br/>
                        ta’lim muhitini yaratadi.
                    </p>
                    <img className={cls.info__image} src={visionImg} alt=""/>
                </div>
                <div className={cls.task}>
                    <h2 className={cls.task__title}>Missiya</h2>
                    <p className={cls.task__desc}>
                        O‘zbekistonda o‘quvchilarga fan, texnologiya, muhandislik va matematika bo‘yicha, axborot
                        texnologiyalari bilan integratsiyalashgan holda ajoyib ta’lim berishdan iborat.
                        Bizning yondashuvimiz qat’iy akademik standartlarni amaliy tajriba bilan birlashtirib,
                        bitiruvchilarimizni tez o‘zgaruvchan global dunyo talablari uchun tayyorlaydi.
                        Hozirgi zamon yoshlari e'tiborini eski nazariya va formulalarni yodlash bilan jalb qilish
                        imkonsiz ekan, biz o'qitish va amaliyot jarayoniga zamonaviy texnalogiyalarni jalb qilish
                        tarafdorimiz.
                    </p>
                </div>
            </div>
        </div>
    );
};
