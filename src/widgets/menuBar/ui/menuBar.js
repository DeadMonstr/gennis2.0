import {useCallback, useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import classNames from "classnames";

import {getUsername} from "pages/loginPage";
import {Link} from "shared/ui/link";
import {ThemeContext} from "shared/lib/context/themeContext";
import {menuConfig} from "../model/consts/menuConfig";

import cls from "./menuBar.module.sass";
import defaultUserImage from "shared/assets/images/user_image.png";

export const Menubar = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {theme} = useContext(ThemeContext)
    const username = useSelector(getUsername)
    const location = 1
    const [activeMenu, setActiveMenu] = useState("home")

    useEffect(() => {
        menuConfig.map(item => {
            if (pathname.includes(item.to)) {
                // console.log(item.to, "effect")
                setActiveMenu(item.to)
            }
        })
    }, [pathname])

    const renderMultipleMenu = useCallback(() => {
        return menuConfig.map((item, index) => {
            const linkItem = item.location ? `/${location}` : ""
            return (
                <li
                    key={index}
                    className={classNames(cls.link, {
                        [cls.active]: item.to === activeMenu
                    })}
                    onClick={() => {
                        // console.log(item.to, "click")
                        setActiveMenu(item.to)
                        navigate(`${item.to}${linkItem}`)
                    }}
                >
                    <Link
                        to={`${item.to}${linkItem}`}
                        extraClass={cls.link__href}
                        activeClass={cls.active}
                        // onClick={() => setActive(item.name)}
                    >
                        <i className={`fas ${item.icon} icon-link`}/>
                        <span className={cls.link__title}>{item.name}</span>
                    </Link>
                </li>
            )
        })
    }, [theme, activeMenu])


    const renderedMenu = renderMultipleMenu()


    return (
        <nav className={cls.menu}>
            <div className={cls.menu__user}>
                <Link to={"profile/1"}>
                    <img
                        className={cls.userImage}
                        src={defaultUserImage}
                        alt=""
                    />
                </Link>
                <div className={cls.userInfo}>
                    {/*<h2>{username ?? "Admin"}</h2>*/}
                    <h3>Admin</h3>
                    <p>admin</p>
                </div>
            </div>
            <ul className={cls.menu__inner}>
                {renderedMenu}
            </ul>
            <div className={cls.menu__footer}>
                <i className="fas fa-sign-out-alt"/>
                <h2>Chiqish</h2>
            </div>
        </nav>
    );
};