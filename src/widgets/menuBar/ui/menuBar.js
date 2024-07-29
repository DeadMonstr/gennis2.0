import {useCallback, useContext} from 'react';

import {Link} from "shared/ui/link";
import {ThemeContext} from "shared/lib/context/themeContext";

import cls from "./menuBar.module.sass";


const menuConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: [true],
        isMenu: true,
    },
    {
        to: "taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        roles: [true],
        isMenu: true,
    },
    {
        to: "studentsDirector",
        name: "O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: true,

    },
    {
        to: "students",
        name: " O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: true,
    },
    {
        to: "groups",
        name: "Gruppalar",
        icon: "fa-users",
        roles: [],
        isMenu: true,
    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        roles: [],
        isMenu: true,
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
        to: "teacherProfile",
        name: "Teacher Profile",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: false
    },
    {
        to: "profile",
        name: "Student Profile",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: false
    },
    {
        to: "vacancyPage",
        name: "Vakansiyalar",
        icon: "fa-tasks",
        roles: [],
        isMenu: true
    },
    {
        to: "timeTable",
        name: "Time Table",
        icon: "fa-tasks",
        roles: [],
        isMenu: true
    },
    {
        to: "vacancyPage/vacancyWorkPage",
        roles: [],
        isMenu: false,
    },
    {
        to: "employer",
        name: "Employers",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: true,
    },
    {
        to: "flows",
        name: "Flows",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: true,
    },
    {
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        roles: [],
        isMenu: true,
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
        isMenu: true,
    },

]


export const Menubar = () => {

    const {theme} = useContext(ThemeContext)

    const renderMultipleMenu = useCallback(() => {
        return menuConfig.map((item, index) => {
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