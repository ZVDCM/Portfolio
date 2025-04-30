'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import ContactMeForm from '@/features/contact-me/components/contact-me-form';
import { TContactMeValues, contactMeSchema } from '@/features/contact-me/schemas/contact-me-form';

export default function ContactMe() {
    const form = useForm<TContactMeValues>({
        resolver: zodResolver(contactMeSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            emailAddress: '',
            message: '',
        },
    });

    const onSubmit = (data: TContactMeValues) => {
        console.warn(data);
    };

    return (
        <div className="flex flex-col gap-8 p-8">
            <h2 className="text-foreground font-mono text-3xl font-bold">Contact Me</h2>
            <Form {...form}>
                <ContactMeForm>
                    <button
                        className="pointer-events-none sr-only"
                        tabIndex={-1}
                        onClick={form.handleSubmit(onSubmit)}
                    />
                </ContactMeForm>
            </Form>
            <Button className="w-full rounded-none" onClick={form.handleSubmit(onSubmit)}>
                Submit
            </Button>
        </div>
    );
}
