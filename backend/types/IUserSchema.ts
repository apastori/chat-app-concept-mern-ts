import { z } from 'zod'
import { UserSchema } from '../schemas/UserSchema'

export type IUserSchema = z.infer<typeof UserSchema>