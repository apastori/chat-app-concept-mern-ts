import { createContext } from "react";
//import { IUserLocalStorage } from "../types/IUserLocalStorage"
import { AuthContext as AuthContextType } from "../types/AuthContext"

export const AuthContext = createContext<AuthContextType | null>(null)