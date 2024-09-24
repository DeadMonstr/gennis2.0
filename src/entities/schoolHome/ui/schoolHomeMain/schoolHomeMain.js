import React, {memo, useState} from 'react';
import classNames from "classnames";
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
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    const [activeItem, setActiveItem] = useState(null)

    const renderItems = () => {
        return list.map(item => {
            return (
                <div
                    onClick={() => setActiveItem(prev =>
                        item === prev ? null : item
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
                </div>
            )
        })
    }

    const render = renderItems()

    return (
        <div className={cls.homeMain}>
            <div className={cls.homeMain__info}>
                <div className={cls.info}>
                    <h1 className={cls.info__title}>Our vision</h1>
                    <p className={cls.info__text}>
                        "Our vision at Turon International School is to be a pioneering institution in <br/>
                        Uzbekistan, renowned for excellence in STEM and IT education. We aim to <br/>
                        foster a community of innovative thinkers and global leaders, equipped with <br/>
                        the knowledge and skills to shape the future. Our commitment is to provide <br/>
                        an inspiring and technologically advanced learning environment where <br/>
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
                            Lorem Ipsum is simply dummy text of <br/>
                            the printing and typesetting industry.
                        </p>
                    </div>
                    <div className={cls.items}>
                        <Slider {...settings}>
                            {render}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
})
