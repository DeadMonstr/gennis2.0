import React, {memo} from 'react';
import classNames from "classnames";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./schoolHomeAboutUs.module.sass";
import image from "shared/assets/images/turonWorker.png";

export const SchoolHomeAboutUs = memo(() => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        // gap: "20px",
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    }

    return (
        <div className={cls.aboutUs}>
            <h2 className={cls.aboutUs__title}>About us</h2>
            <div className={cls.aboutUs__container}>
                {/*<i className={classNames("fas fa-chevron-left", cls.aboutUs__icon)}/>*/}
                {/*<div className={cls.aboutUs__wrapper}>*/}
                <Slider {...settings}>
                    <div className={cls.item}>
                        <div className={cls.item__back}>
                            <img
                                className={cls.item__image}
                                src={image}
                                alt=""
                            />
                        </div>
                        <div className={cls.innerUser}>
                            <h2 className={cls.innerUser__title}>
                                01
                            </h2>
                            <p className={cls.innerUser__text}>
                                Jumaniyozov.Begzod
                            </p>
                        </div>
                        <div className={cls.innerInfo}>
                            <h2 className={cls.innerInfo__title}>
                                SEO Website Design
                            </h2>
                            <p className={cls.innerInfo__text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially .
                            </p>
                        </div>
                    </div>
                    <div
                        className={classNames(cls.item, {
                            // [cls.active]: true
                        })}
                    >
                        <div className={cls.item__back}>
                            <img
                                className={cls.item__image}
                                src={image}
                                alt=""
                            />
                        </div>
                        <div className={cls.innerUser}>
                            <h2 className={cls.innerUser__title}>
                                01
                            </h2>
                            <p className={cls.innerUser__text}>
                                Jumaniyozov.Begzod
                            </p>
                        </div>
                        <div className={cls.innerInfo}>
                            <h2 className={cls.innerInfo__title}>
                                SEO Website Design
                            </h2>
                            <p className={cls.innerInfo__text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially .
                            </p>
                        </div>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.item__back}>
                            <img
                                className={cls.item__image}
                                src={image}
                                alt=""
                            />
                        </div>
                        <div className={cls.innerUser}>
                            <h2 className={cls.innerUser__title}>
                                01
                            </h2>
                            <p className={cls.innerUser__text}>
                                Jumaniyozov.Begzod
                            </p>
                        </div>
                        <div className={cls.innerInfo}>
                            <h2 className={cls.innerInfo__title}>
                                SEO Website Design
                            </h2>
                            <p className={cls.innerInfo__text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially .
                            </p>
                        </div>
                    </div>
                </Slider>
                {/*</div>*/}
                {/*<i className={classNames("fas fa-chevron-right", cls.aboutUs__icon)}/>*/}
            </div>
        </div>
    )
})
