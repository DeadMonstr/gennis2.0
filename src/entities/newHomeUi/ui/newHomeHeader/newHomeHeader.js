import newLogo from "shared/assets/logo/Frame 2147223283.svg";
import newLogoBlue from "shared/assets/logo/turonLogoBlue.svg";
import hamburger from "shared/assets/icons/hamburger.svg";
import whiteHamburger from "shared/assets/icons/whitehamburger.svg";
import cls from "./newHomeUi.module.sass";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { HomeBtnUi } from "shared/ui/homeBtnUi/homeBtnUi";
import { HomeNewForm } from "features/homeNewForm";
import { useLocation, useNavigate } from "react-router";

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
            {title: "Introduction", path: "introduction"},
            {title: "Missions", path: "missions"},
            {title: "Core values", path: "coreValues"},
            {title: "School life", path: "schoolLife"},
            {title: "Parents comment", path: "parentsComment"},
            {title: "File download", path: "fileDownload"},
        ],
    },
    {
        id: 3,
        title: "Admissions",
        url: "/admissions",
        path: [
            {title: "Payment", path: "payment"},
            {title: "Calendar", path: "calendar"},
            {title: "Question", path: "question"},
        ]
    },
    {id: 5, title: "Faculty & Staff", url: "/faculty"},
    {
        id: 4,
        title: "Academics",
        url: "/academics",
        path: [
            { title: "Curriculum overview", path: "curriculum" },
            { title: "Subjects by grade", path: "subjects" },
            { title: "Academic calendar", path: "calendar" },
            { title: "Grading system", path: "grading" },
            { title: "Exams & assessments info", path: "exams" },
        ],
    },
    {
        id: 6,
        title: "Student life",
        url: "/student_life",
        path: [
            { title: "Clubs & Activities", path: "clubs_and_activities" },
            { title: "Sports & Arts", path: "sports_and_arts" },
            { title: "School trips", path: "school_trips" },
            { title: "Competitions", path: "competitions" },
            { title: "Student Council", path: "student_council" },
        ],
    },
    { id: 8, title: "Contact us", url: "/contact" },
];

export const NewHomeHeader = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [active, setActive] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeForm, setActiveForm] = useState(false);
    const [activePath, setActivePath] = useState(null);
    const [activeFormTitle, setActiveFormTitle] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (activePath?.path?.length > 0 && !activeFormTitle) {
            setActiveFormTitle(activePath.path[0].title);
        }
    }, [activePath, activeFormTitle]);

    const handleMainClick = (item) => {
        navigate(item.url);
        setActiveMenu(false)
        if (item.id) {
            if (active === item.id) {
                setActive(null);
                setActivePath(null);
            } else {
                setActive(item.id);
                setActivePath(item);
                if (!activeFormTitle || !item?.path?.some(sub => sub.title === activeFormTitle)) {
                    setActiveFormTitle(item.path?.[0]?.title || null);
                }

            }
        } else {
            setActivePath(item);
            if (!activeFormTitle || !item?.path?.some(sub => sub.title === activeFormTitle)) {
                setActiveFormTitle(item.path?.[0]?.title || null);
            }
        }
    };

    const handleSubItemClick = (e, subItem) => {
        e.stopPropagation();
        setActiveFormTitle(subItem.title);

        if (window.innerWidth > 1050) {
            setActive(null);
            setActivePath(null);
        }

        setActiveMenu(false);

        const section = document.querySelector(`#${subItem.path}`);
        if (section) {
            const yOffset = -150;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            window.history.pushState(null, "", `#${subItem.path}`);
        }
    };

    const renderList = () =>
        headerList.map((item) => {
            const isActive = active === item.id;
            return (
                <li
                    key={item.id || item.title}
                    onClick={() => handleMainClick(item)}
                    className={classNames({ [cls.active]: isActive })}
                >
                    {item.title}
                    {item.path && <i className={`fa-solid fa-chevron-${isActive ? "up" : "down"}`} />}

                    {!!item.path && (
                        <div
                            className={classNames(cls.popup, {
                                [cls.popup_active]: item?.id === activePath?.id,
                                [cls.popup_unactive]: !activePath?.path,
                            })}
                        >
                            <ul>
                                {activePath?.path?.map((subItem) => (
                                    <li
                                        key={subItem.title}
                                        className={classNames({
                                            [cls.active]: activeFormTitle === subItem.title,
                                        })}
                                        onClick={(e) => handleSubItemClick(e, subItem, item)}
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
            <div  className={cls.header__logo}>
                <img src={scrolled ? newLogoBlue : newLogo} alt="logo" />
            </div>

            <ul className={classNames(cls.header__list, { [cls.scrolledActive]: scrolled })}>
                {renderList()}
            </ul>

            <div  style={{ display: "flex", gap: "2rem"}}>

                    <HomeBtnUi extraClass={cls.contact} onClick={() => setActiveForm(true)} type="request">Onlayn ariza topiring</HomeBtnUi>

                <div onClick={() => setActiveMenu(!activeMenu)} className={cls.header__burger}>
                    <img src={scrolled ? whiteHamburger : hamburger} alt="menu" />
                </div>
            </div>

            <div className={classNames(cls.activeMenu, {[cls.activeMenuBc] : activeMenu})}>
                <ul className={classNames(cls.activeMenu__list , { [cls.activeMenuActive]: activeMenu })}>
                    {headerList.map((item) => (
                        <>
                            <li
                                key={item.id}
                                onClick={() => handleMainClick(item)}
                                className={classNames({ [cls.activeList]: active === item.id })}
                            >
                                {item.title}
                                {item.path && <i className={`fa-solid fa-chevron-${active === item.id ? "up" : "down"}`} />}
                            </li>
                            {!!item.path && (
                                <div
                                    className={classNames(cls.popup_mobile, {
                                        [cls.popup_active_mobile]: item?.id === activePath?.id,
                                        [cls.popup_unactive_mobile]: !activePath?.path,
                                    })}
                                >
                                    <ul>
                                        {item.path.map((subItem) => (
                                            <li
                                                key={subItem.title}
                                                className={classNames({
                                                    [cls.active]: activeFormTitle === subItem.title,
                                                })}
                                                onClick={(e) => handleSubItemClick(e, subItem, item)}
                                            >
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    ))}
                </ul>
            </div>

            <HomeNewForm setActiveForm={setActiveForm} activeForm={activeForm} />
        </div>
    );
};
