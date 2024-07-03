import React from 'react';
import classNames from "classnames";

import cls from "./modal.module.sass";
import close from "shared/assets/icons/cross.svg";

export const Modal = ({children, active, setActive}) => {

    const onClick = (target) => {
        if (target.className.includes("outClose")) {
            setActive(false)
        } else if (target.className.includes("innerClose")) {
            setActive(false)
        }
    }

    if (active) {
        return (
            <div
                className={classNames(cls.modal, "outClose")}
                onClick={(e) => onClick(e.target)}
            >
                <div className={cls.modal__inner}>
                    <img
                        className={classNames(cls.modal__close, "innerClose")}
                        onClick={(e) => onClick(e.target)}
                        src={close}
                        alt=""
                    />
                    {children}
                </div>
            </div>
        );
    }
};