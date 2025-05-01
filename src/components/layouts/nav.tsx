'use client';

import Link from 'next/link';
import React from 'react';

import ThemeToggle from '@/components/theme-toggle';

export default function Nav() {
    return (
        <header className="fixed top-0 z-50 w-full">
            <div className="container flex h-16 items-center justify-between gap-4">
                <nav role="navigation" className="flex h-full flex-1 items-stretch justify-between">
                    <Link
                        href="/"
                        className="grid aspect-square place-items-center font-mono font-bold"
                    >
                        ZVM
                    </Link>

                    <button
                        className="grid aspect-video cursor-pointer place-items-center font-mono text-xs font-light underline underline-offset-4"
                        onClick={() =>
                            window.scrollTo({
                                top: document.body.scrollHeight,
                                behavior: 'smooth',
                            })
                        }
                    >
                        contact-me
                    </button>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
