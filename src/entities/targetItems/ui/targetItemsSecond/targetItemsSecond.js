import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./targetItemsSecond.module.sass";
import image from "shared/assets/images/second.png";
import image1 from "shared/assets/images/second1.png";
import image2 from "shared/assets/images/second2.png";
import image3 from "shared/assets/images/second3.png";
import image4 from "shared/assets/images/second4.png";

export const TargetItemsSecond = () => {
    return (
        <div className={cls.home}>
            <h1 className={cls.home__title}>Farzandingizga xalqaro kelajak eshiklarini oching!</h1>
            <p className={cls.home__desc}>
                🌍 <span className={cls.inner}>Turon International School</span> -
                xalqaro ta’lim standartlariga asoslangan, innovatsion o‘quv muassasa.
            </p>
            <img className={cls.home__image} src={image} alt=""/>
            <div className={cls.home__container}>
                <h2 className={cls.title}>Farzandingiz biz bilan quyidagi <br/> sertifikatlarga tayyorlanadi:</h2>
                <div className={cls.list}>
                    <div className={cls.list__item}>
                        <img src={image1} alt=""/>
                        <h3 className={cls.title}> IGCSE</h3>
                        <p className={cls.desc}>
                            👉 14–16 yoshdagi o‘quvchilar uchun dunyo bo‘yicha tan olingan o‘rta ta’lim diplomi. 🔑
                            Britaniya ta’lim tizimiga asoslangan.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <img src={image2} alt=""/>
                        <h3 className={cls.title}>IELTS</h3>
                        <p className={cls.desc}>
                            👉 Ingliz tilini bilish darajasini baholovchi eng mashhur xalqaro test. 🎯 Universitetlarga
                            kirish, chet elda yashash va ishlash uchun zarur.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <img src={image3} alt=""/>
                        <h3 className={cls.title}> CEFR (A1–C2)</h3>
                        <p className={cls.desc}>
                            👉 Til bilim darajasining Yevropa standart tizimi. 📈 Har bir bosqich aniq mezonlar bilan
                            baholanadi.
                            📌 Bizda har bir daraja bo‘yicha to‘liq material va tayyorlov darslari mavjud.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <img src={image4} alt=""/>
                        <h3 className={cls.title}>A-Level</h3>
                        <p className={cls.desc}>
                            👉 Buyuk Britaniya va boshqa yetakchi davlatlarning universitetlariga kirish uchun muhim
                            bosqich. 📚 Chuqurlashtirilgan fanlar: Matematika, Fizika, Biologiya, Kimyo, Ingliz tili va
                            boshqalar.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cls.home__menu}>
                <h2 className={cls.title}>
                    👨‍🏫 Nega aynan
                    <span className={cls.title__inner}>Turon International School?</span>
                </h2>
                <ul className={cls.list}>
                    <li>✔️ Malakali, xalqaro tajribaga ega o‘qituvchilar</li>
                    <li>✔️ Darslar ingliz tilida olib boriladi</li>
                    <li>✔️ Amaliyotga asoslangan o‘qitish</li>
                    <li>✔️ Har bir bola uchun individual yondashuv</li>
                    <li>✔️ STEM, robototexnika, IT, dizayn, sport, drama va yana ko‘plab sohalarda rivojlanish imkoniyati</li>
                    <li>📚 Ta’lim nafaqat nazariy, balki real hayotga tayyorlaydi.</li>
                    <li>🏫 Maktabimiz — bolaning iste’dodi ochilishi va kelajagi mustahkamlanadigan joy.</li>
                </ul>
            </div>
            <Button extraClass={cls.home__btn} type={"simple"}>Ariza qoldiring</Button>
        </div>
    );
}
