import { createContext, useContext, useEffect, useState } from "react";


export const DarkModeData = createContext(false);
export const DarkModeDispatch = createContext(null);

export function useDarkModeData() {
    return useContext(DarkModeData);
}

export function useDarkModeDispatch() {
    return useContext(DarkModeDispatch);
}

let themes = {
    dark: {
        "--theme-background": "#333333",
        "--theme-text-colour": "rgb(223, 221, 221)"
    },
    light: {
        "--theme-background": "white",
        "--theme-text-colour": "#111111"
    }
}

export function DarkModeProvider({children}) {

    let [darkModeValue, setDarkModeValue] = useState(false);

    useEffect(() => {
        // Find the body element
        let bodyElement = document.querySelector("body");
        // Find the styles on the body element
        let modeName = darkModeValue ? "dark" : "light";
        Object.keys(themes[modeName]).forEach(modeKey => {
                bodyElement.style.setProperty(modeKey, themes[modeName][modeKey]);

        }) 
    }, [darkModeValue])

    return(
        <DarkModeData.Provider value={darkModeValue}>
            <DarkModeDispatch.Provider value={setDarkModeValue}>
                {children}
            </DarkModeDispatch.Provider>
        </DarkModeData.Provider>
    )
}