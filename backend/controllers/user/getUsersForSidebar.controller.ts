import { RequestHandler, Request, Response } from "express"
import { User } from "../../models/user.model"

export const getUsersForSidebar: RequestHandler = async(req: Request, res: Response): Promise<void> => {
    try {
		const loggedInUserId = req.user._id
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")
		res.status(200).json(filteredUsers)
	} catch (error: unknown) {
		if (error instanceof Error) {
		    console.log(error)
		    res.status(500).json({ error: "Internal Server Error" })
            return
	    }
        console.error("Unknown error:", error)
	}
}