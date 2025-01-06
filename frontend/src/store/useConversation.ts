import { create, StoreApi, UseBoundStore } from "zustand"
import { ConversationStore } from "../types/ConversationStore"

const useConversation: UseBoundStore<StoreApi<ConversationStore>> = create<ConversationStore>((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages })
}))

export { useConversation }