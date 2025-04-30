'use client';

import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { SectionsContext } from '@/components/providers/sections-context';
import { ThemeContext } from '@/components/providers/theme-context-provider';
import ThemeToggle from '@/components/theme-toggle';
import { THEME } from '@/config/theme';
import { cn } from '@/lib/utils/cn';

interface ISocials {
    icon: IconType;
    href: string;
}

const SOCIALS: ISocials[] = [
    {
        icon: FaLinkedin,
        href: '#',
    },
    {
        icon: FaGithub,
        href: '#',
    },
];

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
                            <p className="w-[50ch] text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                                exercitationem ut optio illum eos doloremque vitae id minus non
                                veniam officia modi sequi quam, error earum quas adipisci nulla
                                unde.
                            </p>
                            <div className="flex justify-between gap-4">
                                {SOCIALS.map((social, index) => {
                                    const Icon = social.icon;

                                    return (
                                        <Link key={`social-${index}`} href={social.href}>
                                            <Icon size="1.2rem" />
                                        </Link>
                                    );
                                })}
                            </div>
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
