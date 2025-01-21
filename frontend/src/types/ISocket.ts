import { DefaultEventsMap } from "socket.io"
import { Socket } from "socket.io-client"

export type ISocket = Socket<DefaultEventsMap, DefaultEventsMap> | null