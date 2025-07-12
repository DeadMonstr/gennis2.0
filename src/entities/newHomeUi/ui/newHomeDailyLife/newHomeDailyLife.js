import React, { useRef } from 'react';

import cls from "./newHomeDailyLife.module.sass";
import image1 from "shared/assets/images/dailyLife1.jpg";
import image2 from "shared/assets/images/dailyLife2.jpg";
import image3 from "shared/assets/images/dailyLife3.jpg";
import image4 from "shared/assets/images/dailyLife4.jpg";
import image5 from "shared/assets/images/dailyLife5.jpg";
import image6 from "shared/assets/images/dailyLife6.jpg";
import image7 from "shared/assets/images/dailyLife7.jpg";
import image8 from "shared/assets/images/dailyLife8.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const NewHomeDailyLife = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const imagesRef = useRef(null);

    useGSAP(() => {

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                scrub: 1,
                toggleActions: "play none none reverse",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(".daily-image", {
            scrollTrigger: {
                trigger: imagesRef.current,
                start: "top 85%",
                end: "bottom 20%",
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
        });
    }, { scope: container });

    return (
        <div ref={container} id={'slider'} className={cls.dailyLife}>
            <div ref={headerRef} className={cls.dailyLife__header}>
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
            <div ref={imagesRef} className={cls.dailyLife__container}>
                <img className={`${cls.image} daily-image`} src={image1} alt=""/>
                <img className={`${cls.image} daily-image`} src={image2} alt=""/>
                <img className={`${cls.image} daily-image`} src={image3} alt=""/>
                <img className={`${cls.image} daily-image`} src={image4} alt=""/>
                <img className={`${cls.image} daily-image`} src={image5} alt=""/>
                <img className={`${cls.image} daily-image`} src={image6} alt=""/>
                <img className={`${cls.image} daily-image`} src={image7} alt=""/>
                <img className={`${cls.image} daily-image`} src={image8} alt=""/>
            </div>
        </div>
    );
};
