import { title } from 'process';
import {z} from 'zod';

export const createComposableSchema = z.object({
    type: z.literal('event'),
    title: z.string(),
    description: z.string(),
    bannerURL: z.string().url("Banner URL must be a URL"),
    userAddress: z.string()
})

export type CreateComposableType = z.infer<typeof createComposableSchema>;