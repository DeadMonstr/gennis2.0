import {memo} from 'react';

import {Button} from "shared/ui/button";

import cls from "./userProfileInfo.module.sass";
import defaultUserImage from "shared/assets/images/user_image.png";

export const UserProfileInfo = memo(() => {
    return (
        <div className={cls.info}>
            <div className={cls.info__container}>
                <img
                    className={cls.info__avatar}
                    src={defaultUserImage}
                    alt=""
                />
                <h3>Kasimxodjayeva Sevinch</h3>
                <p className={cls.info__role}>Teacher</p>
            </div>
            <Button
                type={"simple"}
                extraClass={cls.info__btn}
            >
                Change
            </Button>
            <div className={cls.infos}>
                <div className={cls.infos__item}>
                    <span className={cls.infos__title}>
                        Father name
                    </span>
                    <p className={cls.infos__value}>
                        Sanjarovna
                    </p>
                </div>
                <div className={cls.infos__item}>
                    <span className={cls.infos__title}>
                        Age
                    </span>
                    <div className={cls.infos__wrapper}>
                        <p className={cls.infos__value}>
                            20
                        </p>
                        <p className={cls.infos__value}>
                            01.10.2004
                        </p>
                    </div>
                </div>
                <div className={cls.infos__item}>
                    <span className={cls.infos__title}>
                        Number
                    </span>
                    <p className={cls.infos__value}>
                        +998 (90) 222 44 55
                    </p>
                </div>
            </div>
        </div>
    )
})
