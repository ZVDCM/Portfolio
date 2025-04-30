'use client';

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { SectionsContext } from '../providers/sections-context';

interface ISocials {
    icon: React.ReactNode;
    href: string;
}

const SOCIALS: ISocials[] = [
    {
        icon: <FaLinkedin />,
        href: '#',
    },
    {
        icon: <FaGithub />,
        href: '#',
    },
];

export default function Footer() {
    const { sectionIds } = React.useContext(SectionsContext);

    return (
        <footer className="border-t">
            <div className="container flex h-80 gap-4 px-0">
                <div className="flex flex-1 flex-col gap-4 p-8">
                    <Link href="/" className="w-fit font-mono text-3xl font-bold">
                        ZVM
                    </Link>
                    <div className="flex flex-1">
                        <div className="flex basis-full flex-col items-start gap-4">
                            <p className="w-[50ch] text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                                exercitationem ut optio illum eos doloremque vitae id minus non
                                veniam officia modi sequi quam, error earum quas adipisci nulla
                                unde.
                            </p>
                            <div className="flex justify-between gap-4">
                                {SOCIALS.map((social, index) => (
                                    <Link key={`social-${index}`} href={social.href}>
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
                <div className="flex basis-2/5 flex-col bg-black dark:bg-white"></div>
            </div>
        </footer>
    );
}
