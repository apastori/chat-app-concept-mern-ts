import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/useAuthContext"
import { IUserLocalStorage } from "../types/IUserLocalStorage"
import { AuthAPIBackendResponse } from "../types/AuthAPIBackendResponse"

const useLogin: () => {
    loading: boolean
    login: (username: string, password: string) => Promise<void>
} = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
	const { setAuthUser }: { setAuthUser: (user: IUserLocalStorage | null) => void } = useAuthContext()

	const login = async (userName: string, password: string): Promise<void> => {
		const success = handleInputErrors(userName, password)
		if (!success) return
		setLoading(true)
		console.log(userName)
		console.log(password)
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, password })
			})
			const data: AuthAPIBackendResponse = await res.json()
            if ("error" in data) throw new Error(data.error)
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data)
		} catch (error: unknown) {
            if (error instanceof Error) {
				if (error.message === "The username or password is incorrect.") {
					toast.error(error.message)
					return
				}
				toast.error("Cannot login user because of server malfunction")
				return
			}
			console.error("Unknown error:", error)
		} finally {
			setLoading(false);
		}
	}
	return { loading, login }
}

function handleInputErrors(userName: string, password: string): boolean {
	if (!userName || !password) {
		toast.error("Please fill in all fields")
		return false
	}
	return true
}

export { useLogin }