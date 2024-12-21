import bcrypt from 'bcryptjs'
import { BcryptCompareError } from '../errors/BcryptCompareError'

export async function comparePasswords(inputPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        const isMatch: boolean = await bcrypt.compare(inputPassword, hashedPassword)
        return isMatch
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new BcryptCompareError()
        } else {
            console.error('An unknown error occurred:', error)
        }
        return false
    }
}