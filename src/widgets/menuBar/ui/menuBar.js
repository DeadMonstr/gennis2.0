import React, {useCallback} from 'react';

import {Link} from "shared/ui/link";

import cls from "./menuBar.module.sass";


const navigateList = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: []
    },
    {
        to: "taskManager",
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
        to: "deletedStudents",
        name: "O'chirilgan O'quvchilar",
        icon: "fa-user-alt-slash",
        roles: []
    },
    {
        to: "students",
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
        to: "deletedGroups",
        name: "O'chirilgan Gruppalar",
        icon: "fa-user-alt-slash",
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
        to: "register",
        name: "Registratsiya",
        icon: "fa-edit",
        roles: []
    }



]

export const Menubar = () => {

    const renderMultipleMenu = useCallback(() => {
        return navigateList.map((item, index) => {
            return (
                <li className={cls.link}>
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