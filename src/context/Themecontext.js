import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme : 'dark',
    setLightTheme: ()=> {},
    setDarkTheme: ()=> {},
});

export const ThemeProvider = ThemeContext.Provider;


export const getThemeContext = ()=> {
    return useContext(ThemeContext);
}