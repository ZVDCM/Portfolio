'use client';

import Link from 'next/link';
import React from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { SectionsContext } from './providers/sections-context';

export default function SectionNav() {
    const { sectionRefs, sectionIds } = React.useContext(SectionsContext);
    const [active, setActive] = React.useState<string | undefined>(sectionIds[0]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                }),
            {
                threshold: 0.5,
            },
        );

        sectionRefs.current?.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionRefs]);

    return (
        <aside className="sticky bottom-10 z-10 -mt-9 mb-4 px-4">
            <nav role="navigation">
                <ToggleGroup type="single" className="max-w-fit">
                    {sectionIds.map((id) => (
                        <ToggleGroupItem key={id} value={id} asChild>
                            <Link
                                data-state={active === id ? 'on' : 'off'}
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
