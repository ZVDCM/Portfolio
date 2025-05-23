import { z } from 'zod';

export const contactMeSchema = z.object({
    firstName: z.string().min(1, 'First name is required.'),
    lastName: z.string().min(1, 'Last name is required.'),
    emailAddress: z.string().email('Invalid email address.'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters long.')
        .max(500, 'Message cannot exceed 500 characters.'),
});

export type TContactMeValues = z.infer<typeof contactMeSchema>;
