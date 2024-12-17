import { z } from "zod"

export const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    userName: z.string(),
    password: z.string().min(8),
    gender: z.enum(['male', 'female']),
    profilePic: z.string().optional().default('NoProfilePic')
})