'use client';

import Link from 'next/link';
import React from 'react';

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur-md">
            <nav role="navigation" className="container flex h-16 items-stretch justify-between">
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
        </header>
    );
}
