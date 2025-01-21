import { useContext } from "react"
import { SocketContext } from "./SocketContext"
import { NoSocketContextError } from "../errors/NoSocketContextError"
import type { SocketContext as SocketContextType } from '../types/SocketContext'

export const useSocketContext = (): SocketContextType => {
	const socketContext: SocketContextType | null = useContext(SocketContext)
    if (!socketContext) {
        throw new NoSocketContextError()
    }
    return socketContext
}