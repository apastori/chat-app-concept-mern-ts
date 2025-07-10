import { DefaultEventsMap, Server, Socket } from "socket.io"
import http from "http"
import express, { Application } from "express"
import { IUserSocketMap } from "../types/IUserSocketMap"
import { SocketIdNotFoundError } from "../errors/SocketIdNotFoundError"
import cors from 'cors'

const app: Application = express()

const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer(app)

const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server(server, {
	cors: {
		origin: ["http://localhost:3001"],
		methods: ["GET", "POST"],
		credentials: true
	},
	path: '/socket.io/'
})

const userSocketMap: IUserSocketMap = {} // {userId: socketId}

export const getReceiverSocketId = (receiverId: string): string => {
	const socketId: string | undefined = userSocketMap[receiverId]
    if (!socketId) {
        throw new SocketIdNotFoundError(receiverId)
    }
    return socketId
}

io.on("connection", (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>): void => {
	console.log("a user connected", socket.id)
	const userId: string | undefined = socket.handshake.query['userId'] as (string | undefined)
	if (userId) userSocketMap[userId] = socket.id
	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap))
	// socket.on() is used to listen to the events. It Can be used both on client and server side
	socket.on("disconnect", (): void => {
		console.log("user disconnected", socket.id)
		delete userSocketMap[userId as string]
		io.emit("getOnlineUsers", Object.keys(userSocketMap))
	})
})

export { app, io, server }
