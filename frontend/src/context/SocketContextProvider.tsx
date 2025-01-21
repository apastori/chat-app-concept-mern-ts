import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { ISocketContextProps } from "../types/ISocketContextProps"
import { SocketContext } from "./SocketContext"
import { io, Socket } from "socket.io-client"
import { ISocket } from "../types/ISocket"
import { IUserLocalStorage } from "../types/IUserLocalStorage"
import { DefaultEventsMap } from "socket.io"

export const SocketContextProvider: React.FC<ISocketContextProps> = ({ children }: ISocketContextProps) => {
	const [socket, setSocket]: 
        [ISocket, React.Dispatch<React.SetStateAction<ISocket>>] = 
        useState<ISocket>(null)
	const [onlineUsers, setOnlineUsers]:
		[string[], React.Dispatch<React.SetStateAction<string[]>>] = 
		useState<string[]>([])
	const { authUser }: { authUser: IUserLocalStorage } = useAuthContext()

	useEffect(() => {
		if (authUser) {
			const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io("http://localhost:3000", {
				query: {
					userId: authUser._id,
				}
			})
			setSocket(socket)
			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users: string[]) => {
				setOnlineUsers(users)
			})
			return (): void => {
                socket.close()
                setSocket(null)
            }
		} else {
			if (socket) {
				socket.close()
				setSocket(null)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
}