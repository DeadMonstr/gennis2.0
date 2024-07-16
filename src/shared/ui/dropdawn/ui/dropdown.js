
import {useState} from "react";

import cls from "./dropdown.module.sass"
export const Dropdown = ({title, subTitle, item, children , childrenFooter}) => {
    const [open, setOpen] = useState(false)


    const openDropDown = () =>{
        setOpen(!open)
    }

    return (
        <div className={cls.dropdown}>
            <div onClick={openDropDown} className={cls.header}>
                <div className={cls.info}>
                    <div>{title}</div>
                    {subTitle && <span>{subTitle}</span>}
                </div>
                <div className={cls.btns}>
                    {open ?  <i className="fas fa-sort-up"></i> :  <i className="fas fa-sort-down"></i>}
                </div>
            </div>
            <div className={open ? `${cls.info__visible}` : `${cls.info__invisible}`}>
                {children}
            </div>
        </div>
    )
}
