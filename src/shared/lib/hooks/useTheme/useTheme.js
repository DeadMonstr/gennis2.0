import {useContext} from "react";

import {ThemeContext} from "shared/lib/context/themeContext";

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (theme) => {
        console.log(theme, "theme")
        let newTheme;
        switch (theme) {
            case "app_center_theme":
                newTheme = "app_school_theme"
                break
            case "app_school_theme":
                newTheme = "app_center_theme"
                break
            default:
                newTheme = "app_center_theme"
                break
        }
        setTheme(newTheme)
    }

    return {
        theme: theme || "app_center_theme",
        toggleTheme,
    };
}