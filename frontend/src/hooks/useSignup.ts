import { useState } from "react"
import { IUserSignUpForm } from "../types/IUserSignUpForm"
import toast from "react-hot-toast"
import { isValidPassword } from "../utils/isValidPassword"
import { createMultilineString } from "../utils/createMultilineString"
import { AuthAPIBackendResponse } from "../types/AuthAPIBackendResponse"
import { useAuthContext } from "../context/useAuthContext"
import { IUserLocalStorage } from "../types/IUserLocalStorage"

const useSignup: () => {
	loading: boolean
	signup: (params: IUserSignUpForm) => Promise<void>
} = () => {
	const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
	const { setAuthUser }: { setAuthUser: (user: IUserLocalStorage | null) => void } = useAuthContext()
	//const { setAuthUser } = useAuthContext();
	const signup = async ({ firstName, lastName, userName, password, confirmPassword, gender }: IUserSignUpForm): Promise<void> => {
		const success = handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender })
		if (!success) return
		setLoading(true)
		try {
			const res: Response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ firstName, lastName, userName, password, confirmPassword, gender })
			})
			const data: AuthAPIBackendResponse = await res.json()
			if ("error" in data) throw new Error(data.error)
			localStorage.setItem("chat-user", JSON.stringify(data))
			setAuthUser(data)
		} catch (error: unknown) {
			if (error instanceof Error) {
				if (error.message === "Username already exists") {
					toast.error(error.message)
					return
				}
				toast.error("Cannot signup user because of server malfunction")
				return
			}
			console.error("Unknown error:", error)
		} finally {
			setLoading(false)
		}
	}
	return { loading, signup }
}

function handleInputErrors({ firstName, lastName, userName, password, confirmPassword, gender }: IUserSignUpForm): boolean {
	if (!firstName || !lastName || !userName || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields")
		return false
	}
	if (password !== confirmPassword) {
		toast.error("Passwords do not match")
		return false
	}
	const validationArray = isValidPassword(password)
	if (validationArray.length > 0) {
		toast.error(createMultilineString(validationArray))
		return false
	}
	return true
}

export { useSignup }