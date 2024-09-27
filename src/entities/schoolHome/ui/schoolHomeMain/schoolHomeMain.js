import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import classNames from "classnames";
import {motion, AnimatePresence} from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./schoolHomeMain.module.sass";
import homeImage from "shared/assets/images/homeImage.png";
import idea from "shared/assets/icons/turonIdea.png";

const list = [1, 2, 3, 4, 5, 6, 7]

export const SchoolHomeMain = memo(() => {

    const settings = {
        infinite: false,
        dots: window.outerWidth > 430,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        className: cls.homeSlider,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const carousel = useRef()
    const [activeItem, setActiveItem] = useState(null)
    const [width,setWidth] = useState(null)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[list.length])

    const renderItems = useCallback(() => {
        return list.map(item => {
            return (
                <motion.div
                    transition={{duration : 1}}
                    // onDoubleClick={(e) => {
                    //     console.log(e.detail, "e.detail")
                    //     switch (e.detail) {
                    //         case 1:
                    //             setActiveItem(null)
                    //             break
                    //         case 2:
                    //            setActiveItem(item)
                    //            break
                    //     }
                    //
                    // }}
                    onClick={() => setActiveItem(prev =>
                        prev === item ? null : item
                    )}
                    className={classNames(cls.items__inner, {
                        [cls.active]: activeItem === item
                    })}
                >
                    <img
                        className={cls.items__image}
                        src={idea}
                        alt=""
                    />
                    <h2 className={cls.items__title}>Creative Thinking</h2>
                    <p className={cls.items__more}>Learn more</p>
                </motion.div>
            )
        })
    }, [list, activeItem])

    const render = renderItems()

    return (
        <motion.div className={cls.homeMain}>
            <div className={cls.homeMain__info}>
                <div className={cls.info}>
                    <h1 className={cls.info__title}>Our vision</h1>
                    <p className={cls.info__text}>
                        "Our vision at Turon International School is to be a pioneering institution in
                        Uzbekistan, renowned for excellence in STEM and IT education. We aim to
                        foster a community of innovative thinkers and global leaders, equipped with
                        the knowledge and skills to shape the future. Our commitment is to provide
                        an inspiring and technologically advanced learning environment where
                        students are empowered to
                    </p>
                </div>
                <div className={cls.image}>
                    <img src={homeImage} alt=""/>
                </div>
            </div>
            <div className={cls.wrapper}>
                <div className={cls.homeMain__programs}>
                    <div className={cls.programsInfo}>
                        <h2 className={cls.programsInfo__title}>Programs</h2>
                        <p className={cls.programsInfo__text}>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                        </p>
                    </div>
                    <motion.div
                        className={cls.items}
                        ref={carousel}
                    >
                        <motion.div
                            className={cls.items__wrapper}
                            drag={"x"}
                            dragConstraints={{left: -width,right: 0}}
                        >

                            {/*<Slider*/}

                            {/*    {...settings}*/}
                            <AnimatePresence>
                                {render}
                            </AnimatePresence>
                            {/*>*/}
                            {/*</Slider>*/}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
})
