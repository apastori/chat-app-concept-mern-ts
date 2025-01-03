import { Types } from "mongoose"
import { Conversation } from "../../models/conversation.model"
import { Message } from "../../models/message.model"
import { Request, Response , RequestHandler } from 'express'

export const sendMessage: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { message } = req.body
		const { id: receiverId } = req.params
		const senderId = req.user._id as Types.ObjectId

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		})

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			})
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		})

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		// const receiverSocketId = getReceiverSocketId(receiverId);
		// if (receiverSocketId) {
		// 	// io.to(<socket_id>).emit() used to send events to specific client
		// 	io.to(receiverSocketId).emit("newMessage", newMessage);
		// }

		res.status(201).json(newMessage)  
    } catch (error: unknown) {
		if (error instanceof Error) {
		    console.log(error)
		    res.status(500).json({ error: "Internal Server Error" })
            return
	    }
        console.error("Unknown error:", error)
    }
}