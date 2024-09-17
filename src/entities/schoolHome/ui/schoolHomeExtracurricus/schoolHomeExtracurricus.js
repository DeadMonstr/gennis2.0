import classNames from "classnames";
import React, {memo} from 'react';

import cls from "./schoolHomeExtracurricus.module.sass";
import robot from "shared/assets/images/turonRobot.png";

export const SchoolHomeExtracurricus = memo(() => {
    return (
        <div className={cls.extracurricus}>
            <h2 className={cls.extracurricus__title}>Extracurricular</h2>
            <div className={cls.extracurricus__container}>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: true
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: true
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
                <div
                    className={classNames(cls.item, {
                        [cls.active]: false
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: false
                        })}
                    >
                        Robotics
                    </h2>
                    <p className={cls.item__text}>
                        Robotics is an interdisciplinary branch of
                        {/*<br/>*/}
                        electronics and communication, computer
                        {/*<br/>*/}
                        science and engineering...
                    </p>
                </div>
            </div>
        </div>
    )
})
