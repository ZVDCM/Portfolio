import React from 'react';

import { cn } from '@/lib/utils/cn';

export default function ProfessionalGoal({ className, ...props }: React.ComponentProps<'p'>) {
    return (
        <p className={cn('text-sm', className)} {...props}>
            I build cross-platform apps that blend design and technology. My goal is to deliver
            beautiful, performant solutions through full-stack, artistic, and DevOps expertise.
        </p>
    );
}
