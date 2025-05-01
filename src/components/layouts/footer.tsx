'use client';

import Link from 'next/link';
import React from 'react';

import ProfessionalGoal from '@/components/professional-goal';
import { SectionsContext } from '@/components/providers/sections-context';
import { ThemeContext } from '@/components/providers/theme-context-provider';
import Socials from '@/components/socials';
import ThemeToggle from '@/components/theme-toggle';
import { THEME } from '@/config/theme';
import { cn } from '@/lib/utils/cn';

export default function Footer({ children }: React.PropsWithChildren) {
    const { theme } = React.useContext(ThemeContext);
    const { sectionIds } = React.useContext(SectionsContext);

    return (
        <footer className="border-t">
            <div className="container flex px-0">
                <div className="flex flex-1 flex-col gap-8 p-8 pr-0">
                    <Link href="/" className="w-fit font-mono text-3xl font-bold">
                        ZVM
                    </Link>
                    <div className="flex">
                        <div className="flex flex-1 flex-col items-start gap-8">
                            <ProfessionalGoal className="w-[50ch]" />
                            <Socials />
                        </div>
                        <div className="flex flex-1 justify-center">
                            <div className="flex flex-col gap-2">
                                {sectionIds.map((id) => (
                                    <Link
                                        key={id}
                                        href={`#${id}`}
                                        className="font-mono text-xs font-light underline underline-offset-4"
                                    >
                                        {id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ThemeToggle className="mt-auto" />
                </div>
                <div
                    className={cn(
                        'bg-background basis-2/5',
                        theme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
                    )}
                >
                    {children}
                </div>
            </div>
        </footer>
    );
}
