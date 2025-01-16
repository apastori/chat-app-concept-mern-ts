import { useEffect, useState } from "react"
import { useConversation } from "../store/useConversation"
import toast from "react-hot-toast"
import { IUserMessageAPI } from "../types/IUserMessageAPI"
import { IUserConversationAPI } from "../types/IUserConversationAPI"
import { AuthAPIBackendResponseError } from "../types/AuthAPIBackendResponse"

const useGetMessages: () => {
    messages: IUserMessageAPI[]
    loading: boolean
} = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false)
	const { messages, setMessages, selectedConversation }: {
        messages: IUserMessageAPI[],
        setMessages: (messages: IUserMessageAPI[]) => void,
        selectedConversation: IUserConversationAPI | null
    } = useConversation()

	useEffect(() => {
		const getMessages = async (): Promise<void> => {
			setLoading(true)
			try {
				const res: Response = await fetch(`/api/messages/${selectedConversation!._id}`, {
					method: 'GET'
				})
				const data: IUserMessageAPI[] | AuthAPIBackendResponseError = await res.json()
				if ("error" in data) throw new Error(data.error)
				setMessages(data)
			} catch (error: unknown) {
                if (error instanceof Error) {
                    if (error.message === "Internal Server Error") {
                        toast.error(error.message)
                        return
                    }
                    toast.error("Cannot get Messages because of server malfunction")
                    return
                }
                console.error("Unknown error:", error)
			} finally {
				setLoading(false)
			}
		}
		if (selectedConversation?._id) getMessages()
	}, [selectedConversation, setMessages])

	return { messages, loading }
}

export { useGetMessages }