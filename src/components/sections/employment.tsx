'use client';

import Image from 'next/image';
import React from 'react';

import fshqEoty from '@/assets/images/fshq/eoty.jpg';
import fshqParty from '@/assets/images/fshq/party.jpg';

interface IEmploymentProps {
    id: string;
}

export default function Employment({ id }: IEmploymentProps) {
    return (
        <>
            <h2 className="sr-only">{id}</h2>
            <div className="container flex h-screen border-b border-dashed">
                <figure className="flex-1">
                    <Image
                        src={fshqParty}
                        alt="Closing party at FullStack HQ"
                        placeholder="blur"
                        className="size-full object-cover"
                    />
                </figure>
                <div className="flex flex-1 flex-col justify-center">
                    <article className="flex flex-col gap-8 pl-16">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-mono text-4xl font-bold">FullStack HQ</h1>
                            <p className="font-mono text-xl">Full-stack Developer</p>
                        </div>
                        <p className="w-[60ch] text-sm">
                            Optimizing websites, enhancing security, and integrating analytics. Led
                            development on projects and became the main developer for several other
                            web and mobile projects, focusing on design, security, performance, and
                            scalability
                        </p>
                    </article>
                </div>
            </div>
            <div className="container flex h-screen px-0">
                <figure className="flex-1">
                    <Image
                        src={fshqEoty}
                        alt="Employee of the year at FullStack HQ"
                        placeholder="blur"
                        className="size-full object-cover"
                    />
                </figure>
                <div className="flex flex-1 items-center">
                    <article className="pl-16">
                        <h1 className="font-mono text-4xl font-bold">Employee of the year!</h1>
                    </article>
                </div>
            </div>
        </>
    );
}
