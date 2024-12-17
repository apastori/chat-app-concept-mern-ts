export interface IUser {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    gender: 'male' | 'female',
    profilePic?: string
}
