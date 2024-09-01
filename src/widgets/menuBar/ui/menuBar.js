import {useCallback, useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import classNames from "classnames";

import {getUserId, getUsername} from "pages/loginPage";
import {Link} from "shared/ui/link";
import {ThemeContext} from "shared/lib/context/themeContext";
import {menuConfig} from "../model/consts/menuConfig";
import {getUserBranchId, getUserPermission, getUserProfileData} from "entities/profile/userProfile";
import cls from "./menuBar.module.sass";
import defaultUserImage from "shared/assets/images/user_image.png";
import {NavLink} from "react-router-dom";
import {getSystem} from "features/themeSwitcher";
import {getSelectedLocations} from "features/locations";
import {getBranch} from "features/branchSwitcher";

export const Menubar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {theme} = useContext(ThemeContext);
    const username = useSelector(getUsername);


    const userPermissions = useSelector(getUserPermission);
    const user = useSelector(getUserProfileData);


    // const changeLocations = 1;
    const location = useSelector(getUserBranchId)
    const userId = useSelector(getUserId)
    const system = useSelector(getSystem)
    const selectedLocations = useSelector(getSelectedLocations)
    const branch = useSelector(getBranch)







    const renderMultipleMenu = useCallback(() => {

        const linkId = selectedLocations?.length > 1 ? "" : `/${branch?.id}`


        return menuConfig.map((item, index) => {

            console.log(user, "absdjabsha")
            if (!item?.system.includes(system.type)) return;
            if ((typeof item.roles === "object" && user?.job.some(job => item.roles.includes(job))) || (typeof item.roles === "boolean" && item.roles)) {



                return (
                    <NavLink
                        to={`${item.to}${linkId}`}
                        key={index}
                        className={({isActive}) =>
                            isActive ? `${cls.link} ${cls.active}` : `${cls.link}`
                        }
                    >
                    <span
                        className={cls.link__href}
                    >
                        <i className={`fas ${item.icon} icon-link`}/>
                        <span className={cls.link__title}>{item.name}</span>
                    </span>
                    </NavLink>
                );
            }


        });
    }, [theme, selectedLocations, branch,user]);

    const renderedMenu = renderMultipleMenu();

    return (
        <nav className={cls.menu}>
            <div className={cls.menu__user}>
                <Link to={`profile/${userId}`}>
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
                <div className={cls.menu__}>
                    <i className="fas fa-sign-out-alt"/>
                    <h2>Chiqish</h2>
                </div>
            </div>
        </nav>
    );
};
