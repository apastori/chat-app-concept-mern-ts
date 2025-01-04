import { useState } from "react"
import { useAuthContext } from "../context/useAuthContext"
import toast from "react-hot-toast"
import { IUserLocalStorage } from "../types/IUserLocalStorage"
import { IMessageLogout } from "../types/IMessageLogout"

const useLogout: () => {
    loading: boolean
    logout: () => Promise<void>
} = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
	const { setAuthUser }: { setAuthUser: (user: IUserLocalStorage | null) => void } = useAuthContext()

	const logout = async (): Promise<void> => {
		setLoading(true)
		try {
			const res: Response = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			})
			const data: IMessageLogout = await res.json()
			if ("error" in data) throw new Error(data.error)
			localStorage.removeItem("chat-user")
			setAuthUser(null)
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.error("Cannot logout user because of server malfunction")
				return
			}
			console.error("Unknown error:", error)
		} finally {
			setLoading(false)
		}
	}
	return { loading, logout }
};
export { useLogout }