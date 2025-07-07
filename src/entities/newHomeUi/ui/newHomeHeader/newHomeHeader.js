import newLogo from "shared/assets/logo/turonNew.svg";
import hamburger from "shared/assets/icons/hamburger.svg";
import whiteHamburger from "shared/assets/icons/whitehamburger.svg";
import cls from "./newHomeUi.module.sass";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { HomeBtnUi } from "shared/ui/homeBtnUi/homeBtnUi";
import { HomeNewForm } from "features/homeNewForm";
import { useNavigate } from "react-router";

const headerList = [
    {
        id: 1,
        title: "Home",
        url: "/",
        path: [
            { title: "Homepage", path: "homepage" },
            { title: "Upcoming Events", path: "events" },
            { title: "Photo slider", path: "slider" },
            { title: "Quick links", path: "quickLinks" },
        ],
    },
    {
        id: 2,
        title: "About Us",
        url: "/about",
        path: [
            { title: "Homepage", path: "homepage" },
            { title: "Upcoming Events", path: "events" },
            { title: "Photo slider", path: "slider" },
            { title: "Quick links", path: "quickLinks" },
        ],
    },
    { id: 3, title: "Admissions", url: "/contact" },
    { id: 4, title: "Academics", url: "/contact" },
    { id: 5, title: "FACULTY & STAFF", url: "/contact" },
    { id: 6, title: "STUDENT LIFE", url: "/contact" },
    { id: 7, title: "GALLERY", url: "/contact" },
    { id: 8, title: "CONTACT US", url: "/contact" },
];

export const NewHomeHeader = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeForm, setActiveForm] = useState(false);
    const [activePath, setActivePath] = useState(null);
    const [activeFormTitle, setActiveFormTitle] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMainClick = (item) => {
        navigate(item.url);
        if (item.id) {
            if (active === item.id) {
                setActive(null);
                setActivePath(null);
            } else {
                setActive(item.id);
                setActivePath(item);
            }
        } else {
            setActivePath(item);
        }
    };

    const handleSubItemClick = (e, subItem) => {
        e.stopPropagation();
        setActiveFormTitle(subItem.title);
        const target = document.getElementById(subItem.path);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, '', `#${subItem.path}`);
        }
        setActive(null);
        setActivePath(null);
        setActiveMenu(false);
    };

    const renderList = () => headerList.map(item => {
        const isActive = active === item.id;
        return (
            <li
                key={item.id || item.title}
                onClick={() => handleMainClick(item)}
                className={classNames({ [cls.active]: isActive })}
            >
                {item.title}
                <i className={`fa-solid fa-chevron-${isActive ? "up" : "down"}`} />

                {!!item.path && (
                    <div
                        className={classNames(cls.popup, {
                            [cls.popup_active]: item?.id === activePath?.id,
                            [cls.popup_unactive]: !activePath?.path,
                        })}
                    >
                        <ul>
                            {activePath?.path?.map(subItem => (
                                <li
                                    key={subItem.title}
                                    className={classNames({ [cls.active]: activeFormTitle === subItem.title })}
                                    onClick={(e) => handleSubItemClick(e, subItem)}
                                >
                                    {subItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </li>
        );
    });

    return (
        <div className={classNames(cls.header, { [cls.scrolled]: scrolled })}>
            <div className={cls.header__logo}>
                <img src={newLogo} alt="logo" />
            </div>

            <ul className={classNames(cls.header__list, { [cls.scrolledActive]: scrolled })}>
                {renderList()}
            </ul>

            <div style={{ display: "flex", gap: "2rem" }}>
                {window.innerWidth > 1050 && (
                    <HomeBtnUi type="request">Onlayn ariza topiring</HomeBtnUi>
                )}
                <div onClick={() => setActiveMenu(!activeMenu)} className={cls.header__burger}>
                    <img src={scrolled ? whiteHamburger : hamburger} alt="menu" />
                </div>
            </div>

            <div className={classNames(cls.activeMenu, { [cls.activeMenuActive]: activeMenu })}>
                <ul className={cls.activeMenu__list}>
                    {headerList.map(item => (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={classNames({ [cls.activeList]: active === item.id })}
                        >
                            {item.title}
                            <i className={`fa-solid fa-chevron-${active === item.id ? "up" : "down"}`} />
                        </li>
                    ))}
                </ul>
            </div>

            <HomeNewForm setActiveForm={setActiveForm} activeForm={activeForm} />
        </div>
    );
};
