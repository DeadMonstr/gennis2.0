import { useCallback, useContext, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";

import { getUsername } from "pages/loginPage";
import { Link } from "shared/ui/link";
import { ThemeContext } from "shared/lib/context/themeContext";
import { menuConfig } from "../model/consts/menuConfig";
import { getUserPermission } from "pages/profilePage";
import cls from "./menuBar.module.sass";
import defaultUserImage from "shared/assets/images/user_image.png";

export const Menubar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { theme } = useContext(ThemeContext);
    const username = useSelector(getUsername);
    const userPermissions = useSelector(getUserPermission);
    const location = 1;
    const [activeMenu, setActiveMenu] = useState("home");
    const [isDirector, setIsDirector] = useState(false);

    // useEffect(() => {
    //     if (userPermissions) {
    //         const directorRole = userPermissions[1].jobs.some(job => job.director || job.manager === true);
    //         console.log(directorRole)
    //         setIsDirector(directorRole);
    //     }
    // }, [userPermissions]);

    useEffect(() => {
        menuConfig.map(item => {
            if (pathname.includes(item.to)) {
                setActiveMenu(item.to);
            }
        });
    }, [pathname]);

    const renderMultipleMenu = useCallback(() => {
        const filteredMenuConfig = menuConfig.filter(item => {
            if (item.to === "vacancyPage" && !isDirector) {
                return false;
            }
            return true;
        });

        return filteredMenuConfig.map((item, index) => {
            const linkItem = item.location ? `/${location}` : "";
            return (
                <li
                    key={index}
                    className={classNames(cls.link, {
                        [cls.active]: item.to === activeMenu
                    })}
                    onClick={() => {
                        setActiveMenu(item.to);
                        navigate(`${item.to}${linkItem}`);
                    }}
                >
                    <Link
                        to={`${item.to}${linkItem}`}
                        extraClass={cls.link__href}
                        activeClass={cls.active}
                    >
                        <i className={`fas ${item.icon} icon-link`} />
                        <span className={cls.link__title}>{item.name}</span>
                    </Link>
                </li>
            );
        });
    }, [theme, activeMenu, isDirector, location]);

    const renderedMenu = renderMultipleMenu();

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
                    <h3>Admin</h3>
                    <p>admin</p>
                </div>
            </div>
            <ul className={cls.menu__inner}>
                {renderedMenu}
            </ul>
            <div className={cls.menu__footer}>
                <i className="fas fa-sign-out-alt" />
                <h2>Chiqish</h2>
            </div>
        </nav>
    );
};
