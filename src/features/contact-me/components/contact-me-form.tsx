'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TContactMeValues } from '@/features/contact-me/schemas/contact-me-form';

export default function ContactMeForm({ children }: React.PropsWithChildren) {
    const form = useFormContext<TContactMeValues>();

    return (
        <form className="flex flex-1 flex-col gap-4">
            <div className="flex items-start justify-stretch gap-2">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-foreground rounded-none shadow-none"
                                    autoComplete="given-name"
                                    placeholder="First name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-foreground rounded-none shadow-none"
                                    autoComplete="family-name"
                                    placeholder="Last name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input
                                className="text-foreground rounded-none border shadow-none"
                                autoComplete="email"
                                placeholder="Email address"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea
                                className="text-foreground rounded-none border shadow-none"
                                placeholder="Message"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {children}
        </form>
    );
}
