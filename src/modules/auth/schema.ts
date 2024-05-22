import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    pash: z.string().min(6)
});

export const loginSchema = z.object({
    email: z.string().email(),
    pash: z.string().min(6)
});
