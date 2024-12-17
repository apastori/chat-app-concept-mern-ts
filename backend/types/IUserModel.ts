import { InferSchemaType } from 'mongoose'
import { userSchema } from '../models/user.model'

export type IUserModel = InferSchemaType<typeof userSchema>