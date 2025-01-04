import { useState } from "react"
import { IAuthContextProps } from "../types/IAuthContextProps"
import { AuthContext } from "./AuthContext"
import { IUserLocalStorage } from "../types/IUserLocalStorage"

export const AuthContextProvider: React.FC<IAuthContextProps> = ({ children }: IAuthContextProps) => {
	const [authUser, setAuthUser]: [IUserLocalStorage, React.Dispatch<React.SetStateAction<IUserLocalStorage>>] = useState<IUserLocalStorage>(JSON.parse(localStorage.getItem("chat-user") || 'null'))
	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}