import { RequestHandler, Request, Response } from "express"

export const logout: RequestHandler = (_req: Request, res: Response): void => {
	try {
		res.cookie("jwt", "", { maxAge: 0 })
		res.status(200).json({ message: "Logged out successfully" })
	} catch (error: unknown) {
		if (error instanceof Error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        console.error("Unknown error:", error)
	}
}
