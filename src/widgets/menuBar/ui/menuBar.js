import React, {useCallback, useState} from 'react';
import {NavLink} from "react-router-dom";

import cls from "./menuBar.module.sass";


const navigateList = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: []
    },
    {
        to: "/taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        roles: []
    },
    {
        to: "/login",
        name: "Yangi O'quvchilar",
        icon: "fa-user",
        roles: []
    },
    {
        to: "/login",
        name: "O'chirilgan O'quvchilar",
        icon: "fa-user-alt-slash",
        roles: []
    },
    {
        to: "/login",
        name: "O'qiyotgan O'quvchilar",
        icon: "fa-user-graduate",
        roles: []
    },
    {
        to: "/login",
        name: "Gruppalar",
        icon: "fa-users",
        roles: []
    },
    {
        to: "/login",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        roles: []
    },
    {
        to: "/login",
        name: "Ishchilar",
        icon: "fa-id-badge",
        roles: []
    },
    {
        to: "/login",
        name: "Buxgalteriya Hisobi",
        icon: "fa-file-invoice-dollar",
        roles: []
    },
    {
        to: "/login",
        name: "Honalar",
        icon: "fa-door-closed",
        roles: []
    },
    {
        to: "/login",
        name: "Capital Category",
        icon: "fa-coins",
        roles: []
    },
    {
        to: "/login",
        name: "Centre info",
        icon: "fa-info",
        roles: []
    },
    {
        to: "/login",
        name: "Kitoblar",
        icon: "fa-book",
        roles: []
    },
    {
        to: "/login",
        name: "Registratsiya",
        icon: "fa-edit",
        roles: []
    }



]

export const Menubar = () => {


    const [isActiveLink, setIsActiveLink] = useState("home")

    const renderMultipleMenu = useCallback(() => {
        return navigateList.map((item, index) => {
            return (
                <Link
                    item={item}
                    setActive={setIsActiveLink}
                />
            )
            // if (item.children && (role === ROLES.Director || role === ROLES.Accountant)) {
            //     return (
            //         <MultipleLink
            //             key={index}
            //             item={item}
            //             activeElem={descActive}
            //             onDropMenu={onDropMenu}
            //             menuActive={menuActive}
            //             setMenuActive={setMenuActive}
            //             role={role}
            //         />
            //     )
            // } else {
            //     return (
            //         <SimpleLink
            //             location={location}
            //             role={role}
            //             key={index}
            //             item={item}
            //             activeElem={descActive}
            //             onDropMenu={onDropMenu}
            //             menuActive={menuActive}
            //             setMenuActive={setMenuActive}
            //         />
            //     )
            // }
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

const Link = ({item, isActive, setActive}) => {
    return (
        <li className={cls.link}>
            <NavLink
                to={item.to}
                className={
                    ({isActive}) =>
                        isActive ? `${cls.link__href} ${cls.active}` : cls.link__href

                }
                onClick={() => setActive(item.name)}
            >
                <i className={`fas ${item.icon} icon-link`}/>
                <span className={cls.link__title}>{item.name}</span>
            </NavLink>
        </li>
    )
}

