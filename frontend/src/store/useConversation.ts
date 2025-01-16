import { create, StoreApi, UseBoundStore } from "zustand"
import { ConversationStore } from "../types/ConversationStore"

const useConversation: UseBoundStore<StoreApi<ConversationStore>> = create<ConversationStore>((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation): void => set({ selectedConversation }),
	messages: [],
	setMessages: (messages): void => set({ messages })
}))

export { useConversation }