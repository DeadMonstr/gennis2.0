import React, {useState} from 'react';

import {SearchPlatformInput} from "features/searchInput";
import GetLocation from "features/getLocation/getLocation";
import {MainSwitch} from "shared/ui/mainSwitch";

import cls from "./header.module.sass";
import logo from "shared/assets/images/logo.svg";

export const Header = () => {

    const [selected, setSelected] = useState([])
    const [deledtedId, setDeletedId] = useState(0)

    console.log(selected, "selected")

    return (
        <header className={cls.header}>
            <div className={cls.header__top}>
                <img className={cls.header__logo} src={logo} alt=""/>
                <SearchPlatformInput/>
                <div className={cls.inner}>
                    <MainSwitch/>
                    <GetLocation/>
                </div>
            </div>
            <div className={cls.header__bottom}>
                <p className={cls.header__info}>Home / list</p>
                <div className={cls.header__selected}>
                    {
                        selected.map(item => {
                            return (
                                <div
                                    className={cls.header__item}
                                >
                                    <i
                                        onClick={() => setDeletedId(item.id)}
                                        className="fa fa-times"
                                    />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};