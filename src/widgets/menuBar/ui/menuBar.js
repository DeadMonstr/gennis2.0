import React, {useCallback} from 'react';

import {Link} from "shared/ui/link";
import {routersConfig} from "app/routers";

import cls from "./menuBar.module.sass";

export const Menubar = () => {

    const renderMultipleMenu = useCallback(() => {
        return routersConfig.map((item, index) => {
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
        })
    }, [])


    const renderedMenu = renderMultipleMenu()


    return (
        <nav className={cls.menu}>
            <ul className={cls.menu__inner}>
                {renderedMenu}
            </ul>
        </nav>
    );
};