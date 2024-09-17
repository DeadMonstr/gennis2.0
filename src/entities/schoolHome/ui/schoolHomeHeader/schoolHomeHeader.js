import classNames from "classnames";
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';

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

    // const currentHeight = useRef()
    const [activeSection, setActiveSection] = useState()

    // useEffect(() => {
    //     console.log(currentHeight?.current?.offsetHeight, "offsetHeight")
    // }, [currentHeight?.current?.offsetHeight])

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

    // console.log(document.heig, "innerHeight")

    return (
        <div
            className={cls.homeHeader}
            // ref={currentHeight}
        >
            <div className={cls.homeHeader__burger}>
                <i className="fas fa-bars"/>
            </div>
            <div className={cls.homeHeader__logo}>
                <img className={cls.logo} src={turonLogo} alt=""/>
                <img className={cls.logoText} src={turonLogoText} alt=""/>
            </div>
            <ul className={cls.homeHeader__list}>
                {render}
                {/*<li className={cls.listItem}>Education</li>*/}
                {/*<li className={cls.listItem}>News</li>*/}
                {/*<li className={cls.listItem}>Work with us</li>*/}
                {/*<li className={cls.listItem}>Campus life</li>*/}
                {/*<li className={cls.listItem}>Academic calendar</li>*/}
            </ul>
            <div className={cls.homeHeader__btns}>
                {/*<Button*/}
                {/*    extraClass={cls.aplayBtn}*/}
                {/*    type={"simple-add"}*/}
                {/*>*/}
                {/*    Aplay*/}
                {/*</Button>*/}
                <Button
                    extraClass={cls.loginBtn}
                    type={"login"}
                >
                    Login
                </Button>
            </div>
        </div>
    )
})
