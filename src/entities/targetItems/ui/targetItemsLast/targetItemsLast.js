import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./targetItemsLast.module.sass";
import image from "shared/assets/images/last.png";

export const TargetItemsLast = () => {
    return (
        <div className={cls.home}>
            <h1 className={cls.home__title}>🤖 Kelajak kasblariga bugundan tayyorgarlik!</h1>
            <p className={cls.home__desc}>
                🌟 <span className={cls.inner}>Turon International School</span>’da farzandingiz zamonaviy texnologiyalar
                olamiga sho‘ng‘iydi!
            </p>
            <img className={cls.home__image} src={image} alt=""/>
            <div className={cls.home__container}>
                <h2 className={cls.title}>🎯 Asosiy yo‘nalishlarimiz:</h2>
                <div className={cls.list}>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>🧠 STEM (Science, Technology, Engineering, Mathematics)</h3>
                        {/*<p className={cls.desc}>*/}
                        {/*Farzandingiz aniq fanlarda chuqur bilimga ega bo‘ladi. 📌 Darslar orqali u tizimli fikrlash,*/}
                        {/*muammo yechish, eksperiment qilish, tahlil qilish kabi ko‘nikmalarni o‘zlashtiradi. 🔬 STEM*/}
                        {/*orqali biz bolani nafaqat fanlarga, balki real hayotdagi muammolarga yechim topishga*/}
                        {/*o‘rgatamiz.*/}
                        {/*</p>*/}
                        <ul className={cls.descs}>
                            <li>Farzandingiz aniq fanlarda chuqur bilimga ega bo‘ladi.</li>
                            <li>
                                📌 Darslar orqali u tizimli fikrlash,
                                muammo yechish, eksperiment qilish, tahlil qilish kabi ko‘nikmalarni o‘zlashtiradi.
                            </li>
                            <li>
                                🔬 STEM
                                orqali biz bolani nafaqat fanlarga, balki real hayotdagi muammolarga yechim topishga
                                o‘rgatamiz.
                            </li>
                        </ul>
                    </div>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>💻 IT (Axborot Texnologiyalari)</h3>
                        <ul className={cls.descs}>
                            <li>Kod yozishdan boshlab, sun’iy intellektga qadar!</li>
                            <li>📱 Bizning o‘quvchilar maktab davridayoq:</li>
                            <li>▪️ Saytlar yaratadi</li>
                            <li>▪️ Dasturlash asoslarini o‘rganadi</li>
                            <li>▪️ Kompyuter savodxonligini mukammal egallaydi</li>
                            <li>▪️ IT loyihalarda jamoaviy ishlashni o‘zlashtiradi</li>
                        </ul>
                    </div>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>🔧 Robototexnika</h3>
                        <ul className={cls.descs}>
                            <li>Bolalar kichik yoshdan boshlab robotlar yaratadi!</li>
                            <li>
                                🔹 Darslar LEGO konstruksiyalari, sensorlar, dvigatellar bilan o‘rgatiladi
                            </li>
                            <li>
                                🔹 Har bir bola o‘zining dasturlangan robotini yasaydi
                            </li>
                            <li>🔹 Muhandislik asoslari, logika, algoritmik fikrlash rivojlanadi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cls.home__menu}>
                <h2 className={cls.title}>👨‍🏫 Farzandingizga:</h2>
                <ul className={cls.list}>
                    <li>✔️ Innovatsion o‘qitish metodlari</li>
                    <li>✔️ Amaliy tajriba asosidagi mashg‘ulotlar</li>
                    <li>✔️ Ilhomlantiruvchi o‘quv muhiti</li>
                    <li>✔️ Har bir bolaning qiziqishiga qarab yondashuv</li>
                    <li>✔️ Rivojlanish, ijodkorlik va liderlik ko‘nikmalarini ochish imkoni beriladi</li>
                    <li>🎓 Bizda o‘quvchilar nafaqat o‘qiydi, balki kashf qiladi, yaratadi, va ilhomlanadi!</li>
                </ul>
            </div>
            <Button extraClass={cls.home__btn} type={"simple"}>Ariza qoldiring</Button>
        </div>
    );
}
