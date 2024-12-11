import React from 'react';

import cls from "./schoolHomeChampions.module.sass";
import image from "shared/assets/images/championImage.png";
import ratingStar from 'shared/assets/icons/rate.svg'

export const SchoolHomeChampions = () => {
    return (
        <div className={cls.champions}>
            <div className={cls.champions__title}>
                <h1>School champions</h1>
                <div className={cls.champions__locations}>
                    <span>Chirchiq</span>
                    <span>Chirchiq</span>
                    <span>Chirchiq</span>
                </div>
            </div>
            <div className={cls.champions__container}>
                <div className={cls.champions__item}>
                    <img src={image} alt=""/>
                    <div className={cls.info}>
                        <div className={cls.info__header}>
                            <h4 className={cls.info__header__name}>Expert instruction</h4>
                            <div className={cls.info__header__ratingBox}>
                                <img className={cls.info__header__ratingBox__ratingImg} src={ratingStar} alt=""/>
                                <p>4.9</p>
                            </div>
                        </div>
                        <h2>Watch our Courses</h2>
                        <p>We focus on ergonomics and meeting
                            you where you work. It's only a
                            keystroke away.</p>
                    </div>
                </div>
                <div className={cls.champions__item}>
                    <img src={image} alt=""/>
                    <div className={cls.info}>
                        <div className={cls.info__header}>
                            <h4 className={cls.info__header__name}>Expert instruction</h4>
                            <div className={cls.info__header__ratingBox}>
                                <img className={cls.info__header__ratingBox__ratingImg} src={ratingStar} alt=""/>
                                <p>4.9</p>
                            </div>
                        </div>
                        <h2>Watch our Courses</h2>
                        <p>We focus on ergonomics and meeting
                            you where you work. It's only a
                            keystroke away.</p>
                    </div>
                </div>
                <div className={cls.champions__item}>
                    <img src={image} alt=""/>
                    <div className={cls.info}>
                        <div className={cls.info__header}>
                            <h4 className={cls.info__header__name}>Expert instruction</h4>
                            <div className={cls.info__header__ratingBox}>
                                <img className={cls.info__header__ratingBox__ratingImg} src={ratingStar} alt=""/>
                                <p>4.9</p>
                            </div>
                        </div>
                        <h2>Watch our Courses</h2>
                        <p>We focus on ergonomics and meeting
                            you where you work. It's only a
                            keystroke away.</p>
                    </div>
                </div>
                <div className={cls.champions__item}>
                    <img src={image} alt=""/>
                    <div className={cls.info}>
                        <div className={cls.info__header}>
                            <h4 className={cls.info__header__name}>Expert instruction</h4>
                            <div className={cls.info__header__ratingBox}>
                                <img className={cls.info__header__ratingBox__ratingImg} src={ratingStar} alt=""/>
                                <p>4.9</p>
                            </div>
                        </div>
                        <h2>Watch our Courses</h2>
                        <p>We focus on ergonomics and meeting
                            you where you work. It's only a
                            keystroke away.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
