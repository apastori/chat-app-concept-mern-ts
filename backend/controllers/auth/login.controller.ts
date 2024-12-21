import { RequestHandler, Request, Response } from "express"
import { User } from "../../models/user.model"
import { generateTokenAndSetCookie } from "../../generateToken"
import { comparePasswords } from "../../cryptography/comparePassword"
import { IUserLogin } from "../../types/IUserLogin"
import { IUserDocument } from "../../types/IUserDocument"
import { Types } from "mongoose"

export const login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
		const { userName, password }: IUserLogin = req.body
		const user: IUserDocument | null = await User.findOne({ userName })
		const isPasswordCorrect: boolean = await comparePasswords(password, user?.password || "")
		if (!user) {
			res.status(400).json({ error: "The username or password is incorrect." })
            return
		}
        if (!isPasswordCorrect) {
			res.status(400).json({ error: "The username or password is incorrect." })
            return
		}

		generateTokenAndSetCookie(user._id as Types.ObjectId, res)
		res.status(200).json({
			_id: user._id,
			firstName: user.firstName,
            lastName: user.lastName,
			username: user.userName,
			profilePic: user.profilePic,
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
