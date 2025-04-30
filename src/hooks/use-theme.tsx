'use client';

import React from 'react';

import { THEME, TTheme } from '@/config/theme';

export default function useTheme() {
    const [theme, setTheme] = React.useState<TTheme>(THEME.LIGHT);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event: MediaQueryListEvent) => {
            setTheme(event.matches ? THEME.DARK : THEME.LIGHT);
        };

        setTheme(mediaQuery.matches ? THEME.DARK : THEME.LIGHT);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return theme;
}
