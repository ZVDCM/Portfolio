'use client';

import Link from 'next/link';
import React from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { SectionsContext } from './providers/sections-context';

export default function SectionNav() {
    const { sectionIds } = React.useContext(SectionsContext);

    return (
        <aside className="sticky bottom-10 z-10 -mt-9 mb-4 px-4">
            <nav role="navigation">
                <ToggleGroup type="single" className="max-w-fit">
                    {sectionIds.map((id) => (
                        <ToggleGroupItem key={id} value={id} asChild>
                            <Link
                                href={`#${id}`}
                                className="min-w-auto px-4 font-mono text-xs font-light"
                            >
                                {id}
                            </Link>
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </nav>
        </aside>
    );
}
