import React from 'react';

import cls from "./schoolHomeChampions.module.sass";
import image from "shared/assets/images/championImage.png";

export const SchoolHomeChampions = () => {
    return (
        <div className={cls.champions}>
            <div className={cls.champions__title}>
                <h1>School champions</h1>
                <div className={cls.champions__locations}>
                    <span>Chirchir</span>
                    <span>Chirchir</span>
                    <span>Chirchir</span>
                </div>
            </div>
            <div className={cls.champions__container}>
                <div className={cls.champions__item}>
                    <img src={image} alt=""/>
                    <div className={cls.info}>
                        <div className={cls.info__header}>
                            <p></p>
                            <div></div>
                        </div>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
