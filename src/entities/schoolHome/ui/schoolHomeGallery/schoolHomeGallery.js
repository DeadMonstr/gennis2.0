import classNames from "classnames";
import React, {memo} from 'react';

import cls from "./schoolHomeGallery.module.sass";
import robot from "shared/assets/images/turonGallery.png";

export const SchoolHomeGallery = memo(({setActive}) => {
    return (
        <div className={cls.gallery}>
            <h2 className={cls.gallery__title}>Gallery</h2>
            <div className={cls.gallery__container}>
                <div
                    className={classNames(cls.itemMain, {
                        [cls.active]: true
                    })}
                >
                    <h1
                        className={classNames(cls.itemMain__titles, {
                            [cls.active]: true
                        })}
                    >
                        Our projects
                    </h1>

                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <div
                        onClick={() => setActive(true)}
                        className={cls.item__change}
                    >
                        <i className="fas fa-edit"/>
                    </div>
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <p className={cls.item__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        con

                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <div
                        onClick={() => setActive(true)}
                        className={cls.item__change}
                    >
                        <i className="fas fa-edit"/>
                    </div>
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <p className={cls.item__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        con

                    </p>
                </div>
            </div>
        </div>
    )
})
