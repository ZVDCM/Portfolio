'use client';

import Link from 'next/link';
import React from 'react';

import DownloadResume from '@/components/download-resume';
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
        <footer>
            <div className="container flex px-0">
                <div className="flex-1 py-8">
                    <div className="flex size-full flex-col gap-8 px-8">
                        <Link href="/" className="w-fit font-mono text-3xl font-bold">
                            ZVM
                        </Link>
                        <div className="flex">
                            <div className="flex flex-1 flex-col items-start gap-8">
                                <p className="w-[50ch] text-sm">
                                    To shape a future where art and technology merge
                                    seamlessly—creating scalable, cross-platform solutions that are
                                    both visually compelling and crafted with creativity and
                                    precision
                                </p>
                                <div className="flex items-center gap-4">
                                    <DownloadResume />
                                    <Socials />
                                </div>
                            </div>
                            <div className="flex flex-1 justify-center">
                                <div className="ml-4 flex flex-col gap-2">
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
                </div>
                <div
                    className={cn(
                        'bg-background flex-1',
                        theme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
                    )}
                >
                    {children}
                </div>
            </div>
        </footer>
    );
}
