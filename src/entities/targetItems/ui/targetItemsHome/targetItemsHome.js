import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./targetItemsHome.module.sass";
import image from "shared/assets/images/newHome.png";

export const TargetItemsHome = () => {
    return (
        <div className={cls.home}>
            <h1 className={cls.home__title}>Har bir bola – noyob! Biz bunga ishonamiz.</h1>
            <p className={cls.home__desc}>
                🌍 <span className={cls.inner}>Turon International School</span> – har bir o‘quvchining bilim darajasi va
                individual
                xususiyatlari inobatga
                olinadi.
            </p>
            <img className={cls.home__image} src={image} alt=""/>
            <div className={cls.home__container}>
                <h2 className={cls.title}>🎯 Asosiy yo‘nalishlarimiz:</h2>
                <div className={cls.list}>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>🧠 Kognitiv (bilish) testlar</h3>
                        <p className={cls.desc}>
                            Bu testlar o‘quvchining diqqat, xotira, tafakkur va mantiqiy fikrlash darajasini aniqlashga
                            xizmat qiladi. Masalan: Diqqatni jamlash testi, mantiqiy ketma-ketlikni topish.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>🎯 Motivatsion testlar</h3>
                        <p className={cls.desc}>
                            Bu testlar bolaning o‘qishga, ishlashga va muvaffaqiyatga intilish darajasini o‘lchashga
                            yordam beradi. Masalan: “Men nima uchun o‘qiyman?” testi, ta’limga nisbatan qiziqish
                            so‘rovnomasi.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>😊 Emotsional holat testlari</h3>
                        <p className={cls.desc}>
                            Bu testlar orqali bola yoki o‘smirning kayfiyati, xavotir darajasi va hissiy muvozanatini
                            baholash mumkin. Masalan: Kayfiyat shkalasi, xavotir darajasini aniqlovchi testlar.
                        </p>
                    </div>
                    <div className={cls.list__item}>
                        <h3 className={cls.title}>💬 Shaxsiy sifatlar testlari</h3>
                        <p className={cls.desc}>
                            O‘quvchining xarakteri, o‘zini baholashi va atrofdagilar bilan munosabatini o‘lchovchi
                            testlar. Masalan: O‘ziga ishonch darajasi testi, introvert/ekstravert tahlili.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cls.home__menu}>
                <h2 className={cls.title}>Asosiy maqsadlarimiz</h2>
                <ul className={cls.list}>
                    <li>Bolaning o‘zini anglash va baholash qobiliyatini aniqlash</li>
                    <li>O‘qishga bo‘lgan qiziqish va motivatsiya darajasini aniqlash</li>
                    <li>Diqqat, xotira, fikrlash kabi bilish jarayonlarini baholash</li>
                    <li>Ijtimoiy muhitga moslashish darajasini aniqlash</li>
                    <li>Emotsional barqarorlik va stressga chidamlilikni baholash</li>
                </ul>
            </div>
            <Button extraClass={cls.home__btn} type={"simple"}>Ariza qoldiring</Button>
        </div>
    );
}
