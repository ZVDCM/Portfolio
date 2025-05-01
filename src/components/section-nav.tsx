'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

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
        <aside className="sticky bottom-10 z-10 -mt-12 mb-4 ml-8 w-min">
            <nav role="navigation" className="bg-muted flex justify-around">
                {sectionIds.map((id) => (
                    <Link passHref replace key={id} href={`#${id}`}>
                        <Button
                            variant={active === id ? 'default' : 'outline'}
                            className="data-[variant=outline]:text-muted-foreground rounded-none border-none font-mono text-xs font-light"
                            size="sm"
                        >
                            {id}
                        </Button>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
