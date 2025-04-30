'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';

import { ThemeContext } from '@/components/providers/theme-context-provider';
import { Button } from '@/components/ui/button';
import { THEME } from '@/config/theme';

export default function ThemeToggle({ className, ...props }: React.ComponentProps<'button'>) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <Button
            variant="outline"
            size="icon"
            className={className}
            onClick={() => setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))}
            {...props}
        >
            {theme === THEME.LIGHT ? <Sun /> : <Moon />}
        </Button>
    );
}
