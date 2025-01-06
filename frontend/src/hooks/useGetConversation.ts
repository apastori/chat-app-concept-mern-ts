import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { IUserConversationAPI, IUserConversationAPIOrError } from "../types/IUserConversationAPI"


const useGetConversations: () => {
    loading: boolean
    conversations: IUserConversationAPI[]
} = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false)
	const [conversations, setConversations]: [IUserConversationAPI[], React.Dispatch<React.SetStateAction<IUserConversationAPI[]>>] = useState<IUserConversationAPI[]>([])

	useEffect((): void => {
		const getConversations = async (): Promise<void> => {
			setLoading(true)
			try {
				const res: Response = await fetch("/api/users")
				const data: IUserConversationAPI[] | IUserConversationAPIOrError = await res.json()
				if ("error" in data) throw new Error(data.error)
				setConversations(data as IUserConversationAPI[])
			} catch (error: unknown) {
                if (error instanceof Error) {
                    if (error.message === "Internal Server Error") {
                        toast.error(error.message)
                        return
                    }
                    toast.error("Cannot get conversations because of server malfunction")
                    return
                }
                console.error("Unknown error:", error)
			} finally {
				setLoading(false)
			}
		}
		getConversations()
	}, [])

	return { loading, conversations }
};
export { useGetConversations }