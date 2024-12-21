import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
import type { ResponseWithCookies } from './types/ResponseWithCookie'

export const generateTokenAndSetCookie = (userId: Types.ObjectId, res: ResponseWithCookies): void => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as jwt.Secret | jwt.PrivateKey, {
		expiresIn: "1d"
	} as jwt.SignOptions)

	res.cookie("jwt-token", token, {
		maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds (1 multiplied by 24 hours by 60 minutos by 60 seconds by 1000 milliseconds)
		httpOnly: true, // prevent XSS cross-site scripting attacks to use the cookie by making it inaccesible to javascript
		sameSite: "strict", // prevent CSRF attacks cross-site request forgery attacks
		secure: process.env.ENV !== "development"
	})

}