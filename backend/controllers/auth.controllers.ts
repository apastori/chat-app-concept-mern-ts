import { RequestHandler, Response, Request } from 'express'
import { User } from '../models/user.model'

export const login: RequestHandler = (_req: Request, res: Response): void => {
	res.send('login route')
}

export const logout: RequestHandler = (_req: Request, _res: Response): void => {
	console.log('loginUser')
}

export const signup: RequestHandler = async (req: Request, res: Response): Promise<void> => {
	try {
		const { firstName, lastName, userName, password, confirmPassword, gender } = req.body
		if (password !== confirmPassword) {
			res.status(400).json({ error: "Passwords don't match" })
			return
		}
		const user = await User.findOne({ userName })
		if (user) {
			//User already exists cannot signup
			res.status(400).json({ error: "Username already exists" })
			return
		}
		// Hash Password
		const boyProfilePic: string = `https://avatar.iran.liara.run/public/boy?username=${userName}`
		const girlProfilePic: string = `https://avatar.iran.liara.run/public/girl?username=${userName}`
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(500).json({ error: "Internal Server Error" })
			return
		}
		console.error("Unknown error:", error)
	}
}

