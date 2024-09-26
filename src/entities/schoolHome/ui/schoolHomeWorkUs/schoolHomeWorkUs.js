import classNames from "classnames";
import React, {memo} from 'react';

import cls from "./schoolHomeWorkUs.module.sass";
import backgroundImg from "shared/assets/images/workUs.png";

export const SchoolHomeWorkUs = memo(() => {

    const myStyle = {
        background: `url(${backgroundImg})`
    }

    return (
        <div className={cls.mainWorkBox} style={myStyle}>
            <div className={cls.gallery}>
                <h2 className={cls.gallery__title}>WE WORK HARD, WE PLAY HARD</h2>
                <h3 className={cls.gallery__titles}>Work With Us</h3>
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
                </div>
            </div>
        </div>

    )
})
