import { IUser } from './IUser'

export type IUserNoProfilePic = Omit<IUser, 'profilePic'>