'use client';

import Link from 'next/link';
import React from 'react';

import { SectionsContext } from '../providers/sections-context';

export default function Sections({ children }: React.PropsWithChildren) {
    const { sectionRefs } = React.useContext(SectionsContext);

    return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
            return null;
        }

        const childProps = child.props as React.ComponentProps<'div'>;
        const childId = childProps.id;

        if (!childId) {
            throw new Error(`Child component at index ${index} does not have an id prop.`);
        }

        return (
            <section
                ref={(el) => {
                    if (el) {
                        if (sectionRefs.current) {
                            sectionRefs.current[index] = el as HTMLDivElement;
                        }
                    }
                }}
                id={childId}
                key={childId}
                className="border-b"
            >
                <Link href={`#${childId}`} className="pointer-events-none sr-only" tabIndex={-1} />
                {child}
            </section>
        );
    });
}
