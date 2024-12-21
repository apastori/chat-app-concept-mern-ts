import type { Document } from 'mongoose'

export interface IUserDocument extends Document {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    gender: 'male' | 'female',
    profilePic?: string
}
