import classNames from "classnames";
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

import {Button} from "shared/ui/button";

import cls from "./schoolHomeHeader.module.sass";
import turonLogo from "shared/assets/logo/turonLogo.png";
import turonLogoText from "shared/assets/logo/turonLogoText.png";

const list = [
    {
        name: "aboutUs",
        label: "About us"
    },
    {
        name: "education",
        label: "Education"
    },
    {
        name: "news",
        label: "News"
    },
    {
        name: "workWithUs",
        label: "Work with us"
    },
    {
        name: "campusLife",
        label: "Campus life"
    },
    {
        name: "academicCalendar",
        label: "Academic calendar"
    }
]

export const SchoolHomeHeader = memo(() => {

    const [activeSection, setActiveSection] = useState(null)
    const [activeBurger, setActiveBurger] = useState(false)

    const renderSectionMenuList = useCallback(() => {
        return list.map(item => {
            return (
                <li
                    onClick={() => setActiveSection(item.name)}
                    className={classNames(cls.listItem, {
                        [cls.active]: item.name === activeSection
                    })}
                >
                    {item.label}
                </li>
            )
        })
    }, [activeSection])

    const render = renderSectionMenuList()

    return (
        <>
            <div
                className={cls.homeHeader}
            >
                <div
                    className={classNames(cls.homeHeader__burger, {
                        [cls.active]: activeBurger
                    })}
                >
                    <i
                        onClick={() => setActiveBurger(!activeBurger)}
                        className={
                            activeBurger ? "fas fa-times" : "fas fa-bars"
                        }
                    />
                </div>
                <div className={cls.homeHeader__logo}>
                    <img className={cls.logo} src={turonLogo} alt=""/>
                    <img className={cls.logoText} src={turonLogoText} alt=""/>
                </div>
                <ul className={cls.homeHeader__list}>
                    {render}
                </ul>
                <div className={cls.homeHeader__btns}>
                    <Button
                        extraClass={cls.loginBtn}
                        type={"login"}
                    >
                        Login
                    </Button>
                </div>
            </div>
            <div
                className={classNames(cls.homeMenu, {
                    [cls.active]: activeBurger
                })}
            >
                <ul className={classNames(cls.homeMenu__list, {
                    [cls.active]: activeBurger
                })}>
                    {render}
                </ul>
            </div>
        </>
    )
})
