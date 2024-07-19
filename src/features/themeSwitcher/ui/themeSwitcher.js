import React, {useState} from 'react';

import {MainSwitch} from "shared/ui/mainSwitch";
import {useTheme} from "shared/lib/hooks/useTheme";

export const ThemeSwitcher = () => {

    const {toggleTheme, theme} = useTheme()

    const [active, setActive] = useState(true)

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
