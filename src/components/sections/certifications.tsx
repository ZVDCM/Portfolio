'use client';

import Image from 'next/image';
import React from 'react';

import backend from '@/assets/images/certifications/backend.png';
import cSharp from '@/assets/images/certifications/c-sharp.png';
import dataVisualization from '@/assets/images/certifications/data-visualization.png';
import frontend from '@/assets/images/certifications/frontend.png';
import js from '@/assets/images/certifications/js.png';
import responsive from '@/assets/images/certifications/responsive.png';

interface ICertificationsProps {
    id: string;
}

export default function Certifications({ id }: ICertificationsProps) {
    return (
        <>
            <h2 className="sr-only">{id}</h2>
            <div className="container grid grid-cols-3">
                <Image src={frontend} alt="Front-end freeCodeCamp certification" />
                <Image src={backend} alt="Back-end freeCodeCamp certification" />
                <Image src={cSharp} alt="C# freeCodeCamp certification" />
                <Image src={js} alt="Javascript freeCodeCamp certification" />
                <Image
                    src={dataVisualization}
                    alt="Data visualization freeCodeCamp certification"
                />
                <Image src={responsive} alt="Responsive web design freeCodeCamp certification" />
            </div>
        </>
    );
}
