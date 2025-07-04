import newLogo from "shared/assets/logo/turonNew.svg"
import hamburger from "shared/assets/icons/hamburger.svg"
import whiteHamburger from "shared/assets/icons/whitehamburger.svg"
import cls from "./newHomeUi.module.sass"
import {useEffect, useState} from "react";
import classNames from "classnames";


const headerList = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About Us",
        url: "/about"
    },
    {
        id: 3,
        title: "Admissions",
        url: "/contact"
    },
    {
        id: 4,
        title: "Academics",
        url: "/contact"
    },
    {
        id: 5,
        title: "FACULTY & STAFF",
        url: "/contact"
    },
    {
        id: 6,
        title: "STUDENT LIFE",
        url: "/contact"
    },
    {
        id: 7,
        title: "GALLERY",
        url: "/contact"
    },
    {
        id: 8,
        title: "CONTACT US",
        url: "/contact"
    }
]

export const NewHomeHeader = () => {


    const [active, setActive] = useState(headerList[0].id)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const renderList = () => {
        return headerList.map(item => (
            <li onClick={() => setActive(item.id)} className={classNames(
                {
                    [cls.active]: active === item.id,

                })}>{item.title}</li>
        ))
    }
    return (
        <div className={classNames(cls.header , {
            [cls.scrolled]: scrolled
        })}>

            <div className={cls.header__logo}>
                <img src={newLogo} alt=""/>
            </div>

            <ul className={classNames(cls.header__list , {
                [cls.scrolledActive]: scrolled
            })}>
                {renderList()}
            </ul>

            <div className={cls.header__burger}>
                <img src={scrolled ? whiteHamburger : hamburger} alt=""/>
            </div>


        </div>
    );
};

