import { Request, Response } from "express"
import { Conversation } from "../../models/conversation.model"
import { IMessageDocument } from "../../types/IMessageDocument"

export const getMessages = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id: userToChatId } = req.params
		const senderId = req.user._id

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages")

        //Conversation not exist, new empty Conversation
		if (!conversation) {
            res.status(200).json([])
            return
        }    
		const messages = conversation.messages

		res.status(200).json(messages)
    } catch(error: unknown) {
        if (error instanceof Error) {
		    console.log(error)
		    res.status(500).json({ error: "Internal Server Error" })
            return
	    }
        console.error("Unknown error:", error)
    }
}