import {useContext} from "react";

import {ThemeContext} from "shared/lib/context/themeContext";

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    const currentTheme = localStorage.getItem("theme")

    const toggleTheme = (theme) => {
        console.log(theme, "theme")
        let newTheme;
        switch (theme) {
            case "app_center_theme":
                newTheme = "app_school_theme"
                localStorage.setItem("theme", "app_school_theme")
                break
            case "app_school_theme":
                newTheme = "app_center_theme"
                localStorage.setItem("theme", "app_center_theme")
                break
            default:
                newTheme = "app_center_theme"
                localStorage.setItem("theme", "app_school_theme")
                break
        }
        setTheme(newTheme)
    }

    return {
        theme: theme || currentTheme,
        toggleTheme,
    };
}