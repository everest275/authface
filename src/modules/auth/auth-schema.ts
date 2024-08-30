import { z } from 'zod'

export const registerSchema = z.object({
    user_name: z.string(),
    name: z.string().min(3),
    email: z.string().email(),
    gender: z.string(),
    birth: z.string(),
    password: z.string().min(6,"password must be at least 6 characters"),
    user_membership: z.string(),
    user_state: z.string(),
    pass: z.string().min(4,"code must be at least 4 characters"),
    
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6,"password must be at least 6 characters")
});
