import {useCallback, useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router";
import classNames from "classnames";

import {getUsername} from "pages/loginPage";
import {Link} from "shared/ui/link";
import {ThemeContext} from "shared/lib/context/themeContext";
import {menuConfig} from "../model/consts/menuConfig";

import cls from "./menuBar.module.sass";
import defaultUserImage from "shared/assets/images/user_image.png";

export const Menubar = () => {

    const {pathname} = useLocation()
    const {theme} = useContext(ThemeContext)
    const username = useSelector(getUsername)
    const [activeMenu, setActiveMenu] = useState("home")

    useEffect(() => {
        menuConfig.map(item => {
            if (pathname.includes(item.to)) {
                setActiveMenu(item.to)
            }
        })
    }, [pathname])

    const renderMultipleMenu = useCallback(() => {
        return menuConfig.map((item, index) => {
            // if (item.type?.includes(theme))
            if (item.isMenu)
                return (
                    <li
                        key={index}
                        className={classNames(cls.link, {
                            [cls.active]: item.to === activeMenu
                        })}
                        onClick={() => setActiveMenu(item.to)}
                    >
                        <Link
                            to={item.to === "students" ? `${item.to}/1` : item.to}
                            extraClass={cls.link__href}
                            activeClass={cls.active}
                            // onClick={() => setActive(item.name)}
                        >
                            <i className={`fas ${item.icon} icon-link`}/>
                            <span className={cls.link__title}>{item.name}</span>
                        </Link>
                    </li>
                )
            else return null
        })
    }, [theme, activeMenu])


    const renderedMenu = renderMultipleMenu()


    return (
        <nav className={cls.menu}>
            <div className={cls.menu__user}>
                <img className={cls.userImage} src={defaultUserImage} alt=""/>
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

            </div>
        </nav>
    );
};