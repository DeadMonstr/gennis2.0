import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import classNames from "classnames";
import {motion, AnimatePresence} from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./schoolHomeMain.module.sass";
import homeImage from "shared/assets/images/homeImage.png";
import idea from "shared/assets/icons/turonIdea.png";
import {useDispatch, useSelector} from "react-redux";
import {getUserJob} from "../../../profile/userProfile";
import {
    getSchoolHomeMainData, getSchoolHomeMainDes,
    getSchoolHomeMainLoading,
    getSchoolHomeMainSecDes
} from "../../model/selector/schoolHomeMainSelector";
import {DefaultLoader, DefaultPageLoader} from "../../../../shared/ui/defaultLoader";

const list = [1, 2, 3, 4, 5, 6, 7]

export const SchoolHomeMain = memo(({setActive, setMainActive, role, setActiveEditItem}) => {

    const dispatch = useDispatch()

    const data = useSelector(getSchoolHomeMainData)
    const loading = useSelector(getSchoolHomeMainLoading)
    const secDes = useSelector(getSchoolHomeMainSecDes)
    const des = useSelector(getSchoolHomeMainDes)

    const carousel = useRef()
    const [activeItem, setActiveItem] = useState(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [list.length])

    const renderItems = useCallback(() => {
        return data?.map(item => {
            return (
                <motion.div
                    transition={{duration: 1}}
                    onClick={() => setActiveItem(prev =>
                        prev === item?.id ? null : item?.id
                    )}
                    className={classNames(cls.items__inner, {
                        [cls.active]: activeItem === item?.id
                    })}
                >
                    {
                        role && <div
                            onClick={() => {
                                setActive("edit")
                                setActiveEditItem(item)
                            }}
                            className={cls.items__edit}
                        >
                            <i className="fas fa-edit"/>
                        </div>
                    }
                    <img
                        className={cls.items__image}
                        src={item?.images.map(item => item.image) ?? idea}
                        alt=""
                    />
                    <h2 className={cls.items__title}>{item?.name}</h2>
                    <p className={cls.items__more}>Learn more</p>
                </motion.div>
            )
        })
    }, [data, activeItem])

    const render = renderItems()

    return (
        <motion.div className={cls.homeMain}>
            <div className={cls.homeMain__info}>


                <div className={cls.info}>
                    {role &&  <div
                        onClick={() => setMainActive(true)}
                        className={cls.programsInfo__mainEdit}
                    >
                        <i className="fas fa-edit"/>
                    </div>}


                    <h1 className={cls.info__title}>Our vision</h1>
                    <p className={cls.info__text}>
                        {des && des[0]?.description}
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
                            {secDes && secDes[0]?.description}
                        </p>
                    </div>
                    <motion.div
                        className={cls.items}
                        ref={carousel}
                    >
                        {
                            loading ? <DefaultPageLoader/> :
                                <motion.div
                                    className={cls.items__wrapper}
                                    drag={"x"}
                                    dragConstraints={{left: -width, right: 0}}
                                >

                                    {/*<Slider*/}

                                    {/*    {...settings}*/}
                                    <AnimatePresence>
                                        {render}

                                    </AnimatePresence>

                                    {/*>*/}
                                    {/*</Slider>*/}
                                </motion.div>
                        }


                    </motion.div>
                    {role && <div
                        onClick={() => setActive("add")}
                        className={cls.items__plus}
                    >
                        <i className="fas fa-plus"/>
                    </div>}
                </div>
            </div>
        </motion.div>
    )
})
