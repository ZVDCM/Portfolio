'use client';

import React from 'react';

import { THEME, TTheme } from '@/config/theme';

interface IThemeContextValues {
    theme: TTheme;
    setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
}

export const ThemeContext = React.createContext<IThemeContextValues>({
    theme: THEME.LIGHT,
    setTheme: () => {
        throw new Error('setTheme function not implemented');
    },
});

export default function ThemeContextProvider({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = React.useState<TTheme>(THEME.LIGHT);

    React.useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme') as TTheme;
        if (storedTheme) {
            setTheme(storedTheme);
            return;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(mediaQuery.matches ? THEME.DARK : THEME.LIGHT);
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.remove(THEME.LIGHT, THEME.DARK);
        document.documentElement.classList.add(theme);

        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
