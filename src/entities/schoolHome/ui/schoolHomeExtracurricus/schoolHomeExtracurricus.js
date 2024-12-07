import classNames from "classnames";
import React, {memo, useState} from 'react';

import cls from "./schoolHomeExtracurricus.module.sass";
import robot from "shared/assets/images/turonRobot.png";

const list = [1,2,3,4,5,6,7,8]

export const SchoolHomeExtracurricus = memo(() => {

    const [activeItem, setActiveItem] = useState(null)

    const renderItems = () => {
        return list.map(item => {
            return (
                <div
                    onClick={() => setActiveItem(prev =>
                        item === prev ? null : item
                    )}
                    className={classNames(cls.item, {
                        [cls.active]: activeItem === item
                    })}
                >
                    <img
                        className={cls.item__image}
                        src={robot}
                        alt=""
                    />
                    <h2
                        className={classNames(cls.item__title, {
                            [cls.active]: activeItem === item
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
            )
        })
    }

    const render = renderItems()

    return (
        <div className={cls.extracurricus}>
            <h2 className={cls.extracurricus__title}>Extracurricular</h2>
            <div className={cls.extracurricus__container}>
                {render}
            </div>
        </div>
    )
})
