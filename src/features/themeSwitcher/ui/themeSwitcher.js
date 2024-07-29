import React, {useState} from 'react';

import {MainSwitch} from "shared/ui/mainSwitch";
import {useTheme} from "shared/lib/hooks/useTheme";

export const ThemeSwitcher = () => {

    const {toggleTheme, theme} = useTheme()
    const currentTheme = localStorage.getItem("theme")

    const [active, setActive] = useState(currentTheme === "app_center_theme")

    const onClick = (status) => {
        toggleTheme(theme)
        setActive(status)
    }

    return (
        <MainSwitch
            isActive={active}
            onSwitch={onClick}
        />
    );
};
