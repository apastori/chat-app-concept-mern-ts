import { IUserConversationAPI }  from "./IUserConversationAPI"
import { IUserMessageAPI } from "./IUserMessageAPI"

export interface ConversationStore {
    selectedConversation: IUserConversationAPI | null,
    setSelectedConversation: (conversation: IUserConversationAPI | null) => void,
    messages: IUserMessageAPI[],
    setMessages: (messages: IUserMessageAPI[]) => void
}