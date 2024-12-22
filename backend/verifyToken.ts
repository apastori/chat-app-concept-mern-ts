import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { JWTVerifyError } from "./errors/JWTVerifyError"

export function verifyToken(token: string): jwt.JwtPayload | void {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded as jwt.JwtPayload
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error Veryfing JSON Web Token")
            throw new JWTVerifyError()
        }
        console.error("Unknown error:", error)
    }
}