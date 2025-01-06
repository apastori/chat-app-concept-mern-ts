import { useState } from "react"
import { useConversation } from "../zustand/useConversation"
import toast from "react-hot-toast"
import { IUserMessageAPI } from "../types/IUserMessageAPI";
import { IUserConversationAPI } from "../types/IUserConversationAPI";
import { AuthAPIBackendResponseError } from "../types/AuthAPIBackendResponse";

const useSendMessage = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
	const { messages, setMessages, selectedConversation }: {
        messages: IUserMessageAPI[],
        setMessages: (conversation: IUserConversationAPI | null) => void,
        selectedConversation: IUserConversationAPI | null
    } = useConversation()

	const sendMessage = async (message: IUserMessageAPI): Promise<void> => {
		setLoading(true);
		try {
			const res: Response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data: IUserMessageAPI[] | AuthAPIBackendResponseError = await res.json()
            if ("error" in data) throw new Error(data.error)
			setMessages([...messages, data]);
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error("Cannot login user because of server malfunction")
				return
			}
			console.error("Unknown error:", error)
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;