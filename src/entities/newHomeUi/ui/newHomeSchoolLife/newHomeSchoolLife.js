import React, {useRef} from 'react';

import cls from "./newHomeSchoolLife.module.sass";
import image1 from "shared/assets/images/schoolLife1.jpg"
import image2 from "shared/assets/images/schoolLife2.jpg"
import image3 from "shared/assets/images/schoolLife3.jpg"
import image4 from "shared/assets/images/schoolLife4.jpg"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import classNames from "classnames";
import {isMobile} from "react-device-detect";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/scrollbar';

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
    const container = useRef(null);
    const headerRef = useRef(null);
    const sliderRef = useRef(null);
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

        gsap.from(sliderRef.current, {
            scrollTrigger: {
                trigger: sliderRef.current,
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
                <SwiperSlide
                    className={classNames(cls.card, {
                        "event-card": !isMobile
                    })}
                >
                    <div className={cls.card__header}>
                        <img className={cls.card__image} src={item.image} alt=""/>
                        <p className={cls.card__info}>{item.subTitle}</p>
                    </div>
                    <div className={cls.card__text}>
                        <h2 className={cls.title}>{item.title}</h2>
                        <p className={cls.desc}>100+ o‘quvchi biologiya, matematika va fizika yo‘nalishlarida xalqaro
                            olimpiadalarda g‘oliblikni qo‘lga kiritgan.</p>
                    </div>
                </SwiperSlide>
            )
        })
    }

    return (
        <div ref={container} className={cls.schoolLife} id={"schoolLife"}>
            <div ref={headerRef} className={cls.schoolLife__header}>
                <div className={cls.title}>
                    <span className={cls.title__inner}>Maktab faoliyatidagi</span>
                    muhim yutuqlarimiz
                </div>
                <p className={cls.desc}>
                    Turon Xalqaro Maktabi qisqa vaqt ichida ta’lim sifati, o‘quv dasturlari va <br/>
                    o‘quvchilarning yutuqlari bo‘yicha O‘zbekistonning ilg‘or maktablari qatoridan o‘rin <br/>
                    oldi. Maktabimiz o‘quvchilari nafaqat mahalliy, balki xalqaro miqyosdagi tanlov, <br/>
                    olimpiada va loyihalarda faol ishtirok etib, bir qancha medallar, diplomlar va <br/>
                    grantlarga ega bo‘lishgan.
                </p>
            </div>
            {
                isMobile
                    ?
                    <Swiper
                        scrollbar={{ draggable: true }}
                        modules={[Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={1}
                        ref={mainCardRef}
                        className={cls.schoolLife__container}
                    >
                        {render()}
                    </Swiper>
                    :
                    <div ref={cardsRef} className={cls.schoolLife__container}>
                        {render()}
                    </div>
            }
        </div>
    );
};
