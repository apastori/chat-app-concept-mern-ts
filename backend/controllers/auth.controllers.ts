import { RequestHandler, Response, Request } from 'express'
import { User } from '../models/user.model'
import { IUser } from '../types/IUser'
import { IUserDocument } from '../types/IUserDocument'
import { generateSalt } from '../cryptography/generateSalt'
import { hashPassword } from '../cryptography/hashPassword'
import { BcryptGenSaltError } from '../errors/BcryptGenSaltError'
import { BcryptHashPasswordError } from '../errors/BcryptHashError'
import { isValidPassword } from '../utils/isValidPassword'
import { ModelUserCreateError } from '../errors/ModelUserCreateError'

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
		if (isValidPassword(password).length > 0) {
			res.status(400).json({ error: "Password did not pass validation"})
			return
		}
		const user: IUserDocument | null = await User.findOne({ userName })
		if (user) {
			//User already exists cannot signup
			res.status(400).json({ error: "Username already exists" })
			return
		}
	
		const boyProfilePic: string = `https://avatar.iran.liara.run/public/boy?username=${userName}`
		const girlProfilePic: string = `https://avatar.iran.liara.run/public/girl?username=${userName}`
		const firstNameClean: string = firstName.trim()
		const lastNameClean: string = lastName.trim()
		const userNameClean: string = userName.trim()

		// Hash Password
		const salt: string | void = await generateSalt(10)
		if (salt === undefined) {
			throw new BcryptGenSaltError()
		}
		const hashedPassword: string | void = await hashPassword(password, salt)
		if (hashedPassword === undefined) {
			throw new BcryptHashPasswordError()
		}
		const objUser: IUser = {
			firstName: firstNameClean,
			lastName: lastNameClean,
			userName: userNameClean,
			password: hashedPassword,
			gender: gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		}
		const newUser = new User(objUser)
		if (!newUser) throw new ModelUserCreateError()
		await newUser.save()
		res.status(201).json({
			_id: newUser._id,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			profilePic: newUser.profilePic
		})
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.log(error)
			res.status(500).json({ error: "Internal Server Error" })
			return
		}
		console.error("Unknown error:", error)
	}
}

