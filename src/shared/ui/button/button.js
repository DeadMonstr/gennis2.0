import React from "react";
import classNames from "classnames";

import cls from "./button.module.sass"
import star from "shared/assets/icons/Star.svg"
import checked from "shared/assets/icons/Checked.svg"
import close from "shared/assets/icons/close.svg"
import timeTable from "shared/assets/icons/Clock.png"
import Filter from "shared/assets/Filtericons/Filter.svg";

export const Button = React.memo(({children, onClick, type, disabled, status , extraClass}) => {
    return (
        <button onClick={onClick} className={classNames(cls.btn,extraClass, cls[type], {
            [cls.simple]: type === "simple",
            [cls.simple__add]: type === "simple-add",
            [cls.success]: type === "success",
            [cls.danger]: type === "danger",
            [cls.warning]: type === "warning",
            [cls.disabled]: type === "disabled",
            [cls.star]: type === "star",
            [cls.login]: type === "login",
            [cls.filter]: type === "filter",
        })}
                disabled={disabled}
        >
            {status === "timeTable" ? <img src={timeTable} alt=""/> : null}
            {status === "filter" ? <img src={Filter} alt=""/> : null}
            {type === "star" ? <img src={star} alt=""/> : null}
            {status === "checked" ? <img src={checked} alt=""/> : null}
            {status === "false" ? <img src={close} alt=""/> : null}
            {children}
        </button>
    )
})