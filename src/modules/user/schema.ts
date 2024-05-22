import { z } from 'zod'

export const userSchema = z.object({
    name: z.string({
        required_error: 'Name es required'
    }),
    email: z.string({
        required_error: 'Email es required'
    }).email(({ message: 'Invalid email' })),

    pash: z.string({
        required_error: 'Password is required'
    }).min(6, { message: 'Password must be at least 6 characters' })
})
