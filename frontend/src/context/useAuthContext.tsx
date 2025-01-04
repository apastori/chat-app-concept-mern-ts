import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import type { AuthContext as AuthContextType } from '../types/AuthContext'

export const useAuthContext = () => {
    const authContext: AuthContextType | null = useContext(AuthContext)
    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContext
};
