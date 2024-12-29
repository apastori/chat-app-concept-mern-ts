export interface IUserSingUpForm {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    confirmPassword: string,
    gender: 'male' | 'female' | ""
}