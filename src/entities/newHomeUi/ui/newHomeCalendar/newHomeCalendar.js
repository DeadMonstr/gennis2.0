import React, {useRef} from 'react';
import classNames from "classnames";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {isMobile} from "react-device-detect";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";

import {weekdays, list} from "../../config/newHomeCalendarConfig";

import cls from "./newHomeCalendar.module.sass";
import 'swiper/css';
import 'swiper/css/scrollbar';

export const NewHomeCalendar = () => {
    const container = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);
    const mainCardRef = useRef(null);

    useGSAP(() => {

        gsap.from(headerRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                scrub: 1,
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
                scrub: 1,
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
                scrub: 1,
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3
        });

    }, {scope: container});

    const render = () => {
        return list.map((item, index) => {
            // if (index > 0 && window.innerWidth <= 430) return null
            return (
                <SwiperSlide className={classNames(cls.container, {
                    "event-card": !isMobile
                })}>
                    <div className={cls.calendarSub}>
                        <div className={cls.header}>{item.month}</div>
                        <div className={cls.grid}>
                            {weekdays.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={classNames(cls.day, {
                                        [cls.weekend]: idx > 4
                                    })}
                                >
                                    {day}
                                </div>
                            ))}
                            {item.calendarRows.map((row, rowIndex) =>
                                row.map((num, colIndex) => {
                                    if (typeof num === "object") {
                                        return (
                                            <div
                                                style={{background: num.color}}
                                                key={`${rowIndex}-${colIndex}`}
                                                className={classNames(cls.cell)}
                                            >
                                                {num.day}
                                            </div>
                                        )
                                    }
                                    return (
                                        <div
                                            key={`${rowIndex}-${colIndex}`}
                                            className={classNames(cls.cell)}
                                        >
                                            {num === 0 ? "" : num}
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>

                    <div className={cls.rightPanel}>
                        <div className={cls.rightPanelTitle}>Muhim kunlar</div>
                        <div className={cls.rightPanel__container}>
                            {item.days.map(inn => (
                                <div className={cls.importantDate}>
                                    <span className={cls.highlight}>{inn?.day}</span> / {inn?.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
    }

    return (
        <div ref={container} className={cls.calendar} id={"calendar"}>
            <div ref={headerRef} className={cls.calendar__header}>
                <h1 className={cls.title}>Muhim sanalar</h1>
                <p className={cls.desc}>
                    Qabul va o‘quv jarayoniga oid muhim sanalarni kuzatib boring — siz <br/>
                    hech narsani o‘tkazib yubormaysiz.
                </p>
            </div>
            {
                isMobile
                    ?
                    <Swiper
                        autoHeight={true}
                        scrollbar={{ draggable: true }}
                        modules={[Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={1}
                        ref={mainCardRef}
                        className={cls.calendar__container}
                    >
                        {render()}
                    </Swiper>
                    :
                    <div ref={cardsRef} className={cls.calendar__container}>
                        {render()}
                    </div>
            }
        </div>
    );
};
