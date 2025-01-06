import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import type { AuthContext as AuthContextType } from '../types/AuthContext'
import { NoAuthContextError } from "../errors/NoAuthContextError"

export const useAuthContext = (): AuthContextType => {
    const authContext: AuthContextType | null = useContext(AuthContext)
    if (!authContext) {
        throw new NoAuthContextError()
    }
    return authContext
}
