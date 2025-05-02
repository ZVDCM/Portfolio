import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface ISocials {
    icon: IconType;
    href: string;
}

export const SOCIALS = [
    {
        icon: FaLinkedin,
        href: '#',
    },
    {
        icon: FaGithub,
        href: '#',
    },
] as const satisfies ISocials[];

export default function Socials() {
    return (
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
    );
}
