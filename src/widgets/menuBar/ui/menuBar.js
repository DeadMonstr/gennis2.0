import React, {useCallback, useContext} from 'react';

import {Link} from "shared/ui/link";
import {ThemeContext} from "shared/lib/context/themeContext";
import {routersConfig} from "app/routers";

import cls from "./menuBar.module.sass";




export const Menubar = () => {

    const {theme} = useContext(ThemeContext)

    const renderMultipleMenu = useCallback(() => {
        return routersConfig.map((item, index) => {
            // console.log(item.type, "type")
            // console.log(item.type?.includes(theme), "type")
            // if (item.type?.includes(theme))
            if (item.isMenu)
                return (
                    <li
                        key={index}
                        className={cls.link}
                    >
                        <Link
                            to={item.to}
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
            // else return null
        })
    }, [theme])


    const renderedMenu = renderMultipleMenu()


    return (
        <nav className={cls.menu}>
            <ul className={cls.menu__inner}>
                {renderedMenu}
            </ul>
        </nav>
    );
};