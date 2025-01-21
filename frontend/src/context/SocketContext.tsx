import { createContext } from "react"
import { SocketContext as SocketContextType } from "../types/SocketContext"

export const SocketContext = createContext<SocketContextType | null>(null)
