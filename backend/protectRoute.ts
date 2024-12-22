import jwt from "jsonwebtoken"
import { User } from "./models/user.model"
import { Request, Response, NextFunction } from "express"
import { IUser } from "./types/IUser";
import { JWTPayloadUser } from "./types/JWTPayloadUser"

const protectRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const token = req.cookies['jwt-token']

        //Check if token with name jwt-token exists
		if (!token) {
			res.status(401).json({ error: "Unauthorized - No Token Provided" })
            return
		}

        //decodes jwt
		const tokenDecoded: JWTPayloadUser = jwt.verify(token, process.env.JWT_SECRET) as JWTPayloadUser

        //check if jwt is valid, not been tampered with
		if (!tokenDecoded) {
			res.status(401).json({ error: "Unauthorized - Invalid Token" })
            return
		}

		const user = await User.findById(tokenDecoded["userId"]).select("-password")

		if (!user) {
			res.status(404).json({ error: "User not found" })
            return
		}

		req["user"] = user

		next()
	} catch (error: unknown) {
		console.log("Error in protectRoute middleware: ")
        if (error instanceof Error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        console.error("Unknown error:", error)
	}
};

export { protectRoute }