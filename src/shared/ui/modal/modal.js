import React, {memo} from 'react';
import {createPortal} from "react-dom";
import classNames from "classnames";

import {useTheme} from "../../lib/hooks/useTheme";

import cls from "./modal.module.sass";
import close from "shared/assets/icons/cross.svg";

export const Modal = memo(({children, active, setActive, extraClass}) => {

    // const {theme} = useTheme()

    const onClick = (target) => {
        if (target.className.includes("outClose")) {
            setActive(false)
        } else if (target.className.includes("innerClose")) {
            setActive(false)
        }
    }

    if (active) {
        return (
            createPortal(
                <div
                    className={classNames(cls.modal, "outClose")}
                    onClick={(e) => onClick(e.target)}
                >
                    <div className={classNames(cls.modal__inner, extraClass)}>
                        <img
                            className={classNames(cls.modal__close, "innerClose")}
                            onClick={(e) => onClick(e.target)}
                            src={close}
                            alt=""
                        />
                        {children}
                    </div>
                </div>,
                document.body
            )
        );
    }
})