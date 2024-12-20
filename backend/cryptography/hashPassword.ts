import bcrypt from 'bcryptjs'
import { BcryptHashPasswordError } from '../errors/BcryptHashError';

export async function hashPassword(password: string, salt: string | number = 10): Promise<string | void> {
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword
    } catch(error: unknown) {
        if (error instanceof Error) {
            throw new BcryptHashPasswordError()
        } else {
            console.error('An unknown error occurred:', error)
        }
    }
}