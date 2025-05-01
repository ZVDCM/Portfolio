'use client';

import { Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import me from '@/assets/images/me.jpg';
import ProfessionalGoal from '@/components/professional-goal';
import Socials from '@/components/socials';
import { Button } from '@/components/ui/button';

export default function AboutMe() {
    return (
        <div className="container flex h-screen px-0">
            <div className="flex-1">
                <Image
                    priority
                    src={me}
                    alt={"It's me"}
                    placeholder="blur"
                    className="size-full object-cover"
                />
            </div>
            <div className="relative flex flex-1 flex-col justify-center">
                <div className="flex flex-col gap-8 pl-16">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-foreground font-mono text-4xl font-bold">
                            Zehrei Verj Morales
                        </h1>
                        <p className="font-mono text-xl">Full-stack Developer</p>
                    </div>
                    <ProfessionalGoal className="w-[60ch]" />
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="w-fit">
                            <Download /> Download Resume
                        </Button>
                        <Socials />
                    </div>
                </div>
                <span className="absolute bottom-16 left-16 font-mono text-xs font-light">
                    scroll-down
                </span>
            </div>
        </div>
    );
}
