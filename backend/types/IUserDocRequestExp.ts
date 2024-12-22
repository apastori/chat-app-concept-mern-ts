import { IUserDocument } from "./IUserDocument"

export type IUserDocRequestExp = Omit<IUserDocument, 'password'>