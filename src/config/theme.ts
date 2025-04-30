export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
};

export type TTheme = (typeof THEME)[keyof typeof THEME];
