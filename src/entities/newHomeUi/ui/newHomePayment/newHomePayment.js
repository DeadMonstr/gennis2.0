import React, {useEffect, useRef} from 'react';
import cls from "./newHomePayment.module.sass";
import {HomeBtnUi} from "shared/ui/homeBtnUi/homeBtnUi";
import classNames from "classnames";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {fetchBranchesForSelect} from "../../../oftenUsed";
import {useDispatch} from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Scrollbar} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';

const list = [
    {
        location: "Chirchiq",
        classes: [
            { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
            {
                title: "O‘rta sinflar",
                subTitle: "5-9",
                cost: "1 400 000",
                month: "3 500 000",
                desc: "IELTS tayyorgarlik kursi",
            },
            { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
        ]
    },
    {
        location: "Nurafshon",
        classes: [
            { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
            {
                title: "O‘rta sinflar",
                subTitle: "5-9",
                cost: "1 400 000",
                month: "3 500 000",
                desc: "IELTS tayyorgarlik kursi",
            },
            { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
        ]
    },
    {
        location: "Xo'jakent",
        classes: [
            { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
            {
                title: "O‘rta sinflar",
                subTitle: "5-9",
                cost: "1 400 000",
                month: "3 500 000",
                desc: "IELTS tayyorgarlik kursi",
            },
            { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
        ]
    }
];

// const list = [
//     { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
//     { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
//     { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
//     { title: "Yuqori sinflar", subTitle: "10-11", payment: "16mln" },
//     {
//         title: "O‘rta sinflar",
//         subTitle: "5-9",
//         cost: "1 400 000",
//         month: "3 500 000",
//         desc: "IELTS tayyorgarlik kursi",
//     },
//     { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
//     { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
//     { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
//     { title: "Boshlang‘ich sinflar", subTitle: "1-4" },
// ]

export const NewHomePayment = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);
    const mainCardRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBranchesForSelect());
    }, []);

    useGSAP(() => {
        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                scrub: 1
            },
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });

        gsap.from(".event-card", {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                end: "bottom 75%",
                scrub: 1
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });


        gsap.from(mainCardRef.current, {
            scrollTrigger: {
                trigger: mainCardRef.current,
                start: "top 80%",
                end: "bottom 75%",
                scrub: 1
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });
    }, {scope: container});

    const render = () => {
        return list.map(item => (
            <SwiperSlide className={classNames(cls.mainCard, )}>
                <h2 className={cls.mainCard__title}>{item.location}</h2>
                <div className={cls.mainCard__container}>
                    {
                        item.classes.map(inn => (
                            <div
                                className={classNames(cls.card)}
                                style={{
                                    background: item.color,
                                    gap: !!item.color ? "4rem" : "",
                                    color: !!item.color ? "#FFF" : ""
                                }}
                            >
                                <div className={cls.title}>
                                    <h2 className={cls.title__sub} style={{color: !!item.color ? "#FFF" : ""}}>{item.title}</h2>
                                    <h1 className={cls.title__main} style={{color: !!item.color ? "#FFF" : ""}}>
                                        {item.payment ?? "14mln"}
                                        <span className={cls.inner} style={{color: !!item.color ? "#FFF" : ""}}> / {item.subTitle} sinf</span>
                                    </h1>
                                </div>
                                <HomeBtnUi
                                    extraClass={cls.btn}
                                    children={" To‘lov haqida batafsil"}
                                    type={!!item.color ? "request" : "contact"}
                                />
                            </div>
                        ))
                    }
                </div>
            </SwiperSlide>
        ))
    }

    return (
        <div ref={container} className={cls.payment} id={"payment"}>
            <div ref={headerRef} className={cls.payment__header}>
                <h1 className={cls.title}>
                    <span className={cls.title__inner}>To‘lov tafsilotlarini</span> ko‘rib chiqing
                </h1>
                <p className={cls.subTitle}>
                    Farzandingiz sifatli ta’lim olishini istaysizmi? Bizning maktabda to‘lov tizimi shaffof, <br/>
                    tushunarli va qulay shakllantirilgan. Quyida yillik va oylik to‘lovlar, chegirmalar hamda <br/>
                    qo‘shimcha xizmatlar narxlari haqida to‘liq ma’lumot olishingiz mumkin.
                </p>
            </div>

            <Swiper
                scrollbar={{ draggable: true }}
                modules={[Scrollbar]}
                slidesPerGroup={1}
                spaceBetween={50}
                slidesPerView={1}
                className={cls.payment__container}
            >
                {render()}
            </Swiper>
        </div>
    );
};
