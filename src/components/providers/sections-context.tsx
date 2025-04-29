'use client';

import React from 'react';

interface ISectionsContextValues {
    sectionRefs: React.RefObject<HTMLDivElement[] | null>;
    sectionIds: string[];
    setSectionIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SectionsContext = React.createContext<ISectionsContextValues>({
    sectionRefs: React.createRef<HTMLDivElement[]>(),
    sectionIds: [],
    setSectionIds: () => {
        throw new Error('setSectionIds function not implemented');
    },
});

interface ISectionsProps {
    children: React.ReactNode;
}

export default function SectionsContextProvider({ children }: ISectionsProps) {
    const sectionRefs = React.useRef<HTMLDivElement[]>([]);
    const [sectionIds, setSectionIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        setSectionIds(sectionRefs.current.map((ref) => ref.id));
    }, []);

    return (
        <SectionsContext.Provider
            value={{
                sectionRefs,
                sectionIds,
                setSectionIds,
            }}
        >
            {children}
        </SectionsContext.Provider>
    );
}
