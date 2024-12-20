import bcrypt from 'bcryptjs'
import { BcryptGenSaltError } from '../errors/BcryptGenSaltError'

export async function generateSalt(rounds: number = 10): Promise<string | void> {
    try {
        const salt = await bcrypt.genSalt(rounds)
        return salt
    } catch(error: unknown) {
        if (error instanceof Error) {
            throw new BcryptGenSaltError()
        } else {
            console.error('An unknown error occurred:', error)
        }
    }
}