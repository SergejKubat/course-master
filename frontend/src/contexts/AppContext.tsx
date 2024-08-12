import { useState, useEffect, useContext, createContext, Dispatch, ReactNode, SetStateAction } from "react";

import { useFlag } from "@unleash/proxy-client-react";

import { DARK_MODE } from "../constants";

export interface IAppContext {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const darkModeEnabled = useFlag(DARK_MODE);

    useEffect(() => {
        if (darkMode !== darkModeEnabled) {
            console.log("Send data to analytics service.");
        }
    }, [darkMode]);

    useEffect(() => {
        setDarkMode(darkModeEnabled);
    }, [darkModeEnabled]);

    return <AppContext.Provider value={{ darkMode, setDarkMode }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

export default AppContext;
