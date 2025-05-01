'use client';

import Image from 'next/image';
import React from 'react';

import me from '@/assets/images/me.jpg';
import DownloadResume from '@/components/download-resume';
import Socials from '@/components/socials';

interface IAboutMeProps {
    id: string;
}

export default function AboutMe({ id }: IAboutMeProps) {
    return (
        <>
            <h2 className="sr-only">{id}</h2>
            <div className="container flex h-screen px-0">
                <figure className="flex-1">
                    <Image
                        priority
                        src={me}
                        alt={"It's me"}
                        placeholder="blur"
                        className="size-full object-cover"
                    />
                </figure>
                <div className="relative flex flex-1 flex-col justify-center">
                    <article className="flex flex-col gap-8 pl-16">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-mono text-4xl font-bold">Zehrei Verj Morales</h1>
                            <p className="font-mono text-xl">Full-stack Developer</p>
                        </div>
                        <p className="w-[60ch] text-sm">
                            I build cross-platform apps that blend design and technology. My mission
                            is to deliver beautiful, high-performance solutions by combining
                            full-stack development, artistic vision, and DevOps expertise
                        </p>
                        <div className="flex items-center gap-4">
                            <DownloadResume />
                            <Socials />
                        </div>
                    </article>
                    <span className="absolute bottom-16 left-16 font-mono text-xs font-light">
                        scroll-down
                    </span>
                </div>
            </div>
        </>
    );
}
