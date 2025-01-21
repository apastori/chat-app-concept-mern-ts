import { ISocket } from "./ISocket"

export interface SocketContext {
    socket: ISocket,
    onlineUsers: string[]
}