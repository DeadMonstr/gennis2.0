import React, {useEffect, useState} from 'react';

import {MainSwitch} from "shared/ui/mainSwitch";
import {useTheme} from "shared/lib/hooks/useTheme";
import cls from "shared/ui/mainSwitch/mainSwitch.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {fetchThemeSwitcherSystemsThunk} from "features/themeSwitcher/modal/thunk/themeSwitcherThunk";
import {onChangeSystem} from "../modal/slice/themeSwitcherSlice";
import {getSystem, getSystems} from "../modal/selector/themeSwitcherSystems";

export const ThemeSwitcher = () => {

    const {toggleTheme, theme} = useTheme()
    const dispatch= useDispatch()
    const currentTheme = localStorage.getItem("theme")

    const system = useSelector(getSystem)
    const systems = useSelector(getSystems)

    const [active, setActive] = useState(true)
    const [activeType, setActiveType] = useState("center")
    const [isLocal, setIsLocal] = useState(false)


    useEffect(() => {
        dispatch(fetchThemeSwitcherSystemsThunk())
    },[])


    const onClick = (status) => {
        toggleTheme(theme)
        setActive(status)
        setActiveType(status ? "center" : "school")
        dispatch(onChangeSystem(status ? "center" : "school"))
    }

    useEffect(() => {
        const localSystem = JSON.parse(localStorage.getItem("selectedSystem"))
        if (!localSystem && !localSystem?.id) {
            toggleTheme(system.type === "center" ? "app_school_theme" : "app_center_theme")
        }
    }, [system?.id])


    useEffect(() => {
        const localSystem = JSON.parse(localStorage.getItem("selectedSystem"))
        if (localSystem && localSystem?.id && !isLocal && systems.length) {
            toggleTheme(localSystem.type === "center" ? "app_school_theme" : "app_center_theme")
            setIsLocal(true)
            setActive(localSystem.type === "center")
            dispatch(onChangeSystem(localSystem.type))
        }
    },[isLocal,systems])




    if (systems.length < 2) return

    return (
        <MainSwitch
            isActive={active}
            onSwitch={onClick}
        >

            {
                active ?
                    <h2 className={cls.mainSwitch__text}>Center</h2>
                    :
                    <h2 className={cls.mainSwitch__text__center}>School</h2>
            }
        </MainSwitch>
    );
};
