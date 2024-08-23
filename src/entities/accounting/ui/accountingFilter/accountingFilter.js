import cls from "./accountFilter.module.sass"
import classNames from "classnames";
import React from "react";
export const AccountingFilter = ({filter , activeMenu , setActive , setPage}) => {
    // console.log(activeMenu , "filter")
    return (
        <ul className={cls.ul}>
            {filter.map((item, i) => <li
                key={i}
                className={classNames(cls.other__item, {
                    [cls.active]: activeMenu === item.name
                })}
                onClick={() => {
                    setActive(item.name)
                    setPage(item.name)
                }}
            >
                {item.label}
            </li>)}
        </ul>
    );
};

