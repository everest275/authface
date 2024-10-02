    import { z } from 'zod'

export const typeSchema = z.object({
    type_name: z.string({
        required_error: 'Name es required'
    }),
    type_description: z.string({
        required_error: 'Name es required'}),

    state: z.string({
        required_error: 'Name es required'})
})
