import classNames from "classnames";
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';

import {Button} from "shared/ui/button";

import cls from "./schoolHomeHeader.module.sass";
import turonLogo from "shared/assets/logo/turonLogo.png";
import turonLogoText from "shared/assets/logo/turonLogoText.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const list = [
    {
        name: "aboutUs",
        label: "About us",
        children: [
            {
                name: "About TIS",
                path: "aboutUs"
            },
            {
                name: "Principal’s Spotlight",
                path: "principalsSpotlight"
            },
            {
                name: "Student Profile",
                path: "studentProfile"
            },
            {
                name: "Teaching Staff",
                path: "teachingStaff"
            },
        ]
    },
    {
        name: "education",
        label: "Education",
        path: "education"
    },
    {
        name: "news_announcement",
        label: "News  announcement",
        path: "news_announcement"
    },

    {
        name: "students",
        label: "Students",
        path: "students"
    },
    {
        name: "testimonial",
        label: "Testimonial",
        path: "testimonial"
    },
    {
        name: "admission",
        label: "Admission",
        path: "admission"
    },
    {
        name: "workwithus",
        label: "Work with us",
        path: "workwithus",
    },
    // {
    //     name: "academicCalendar",
    //     label: "Academic calendar"
    // }
]

export const SchoolHomeHeader = memo(() => {

    const navigate = useNavigate()

    const [activeSection, setActiveSection] = useState(null)
    const [activeBurger, setActiveBurger] = useState(false)


    console.log(activeSection)

    const renderSectionMenuList = useCallback(() => {
        return list.map(item => {
            return (
                <li
                    onClick={() => {
                        setActiveSection(item.name)
                        // navigate(item.path)
                    }}
                    className={classNames(cls.listItem, {
                        [cls.active]: item.name === activeSection
                    })}
                >
                    {item.label}


                    <div className={classNames({
                            [cls.hoverActive]: item.name === activeSection,
                            [cls.hover]: !item.name === !activeSection
                        }
                    )}>

                    </div>


                </li>
            )
        })
    }, [activeSection])

    const render = renderSectionMenuList()

    return (
        <>
            <div
                // onWheel={(e) => {
                //     console.log(e, "e.target")
                //     console.log(ref?.current?.offsetTop, "currentHeight")
                // }}
                className={cls.homeHeader}
                // ref={ref}
            >
                <div
                    className={classNames(cls.homeHeader__burger, {
                        [cls.active]: activeBurger
                    })}
                >
                    <i
                        onClick={() => setActiveBurger(true)}
                        className={
                            activeBurger ? "fas fa-times" : "fas fa-bars"
                        }
                    />
                </div>
                <div onClick={() => navigate("/")} className={cls.homeHeader__logo}>
                    <img className={cls.logo} src={turonLogo} alt=""/>
                    <img className={cls.logoText} src={turonLogoText} alt=""/>
                </div>
                <ul className={cls.homeHeader__list}>
                    {render}
                </ul>
                <div className={cls.homeHeader__btns}>
                    {/*<Button*/}
                    {/*    extraClass={cls.aplayBtn}*/}
                    {/*    type={"simple-add"}*/}
                    {/*>*/}
                    {/*    Aplay*/}
                    {/*</Button>*/}
                    <Link target={"_self"} to={`login`}>
                        <Button
                            extraClass={cls.loginBtn}
                            type={"login"}
                        >
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
            <div
                className={classNames(cls.homeMenu, {
                    [cls.active]: activeBurger
                })}
            >
                <i
                    onClick={() => setActiveBurger(false)}
                    className={classNames("fas fa-times", cls.homeMenu__icon)}
                />
                <ul className={classNames(cls.homeMenu__list, {
                    [cls.active]: activeBurger
                })}>
                    {render}
                </ul>
            </div>
        </>
    )
})
