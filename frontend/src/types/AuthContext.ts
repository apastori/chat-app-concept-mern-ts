import { IUserLocalStorage } from "./IUserLocalStorage";

export interface AuthContext {
    authUser: IUserLocalStorage | null
    setAuthUser: (user: IUserLocalStorage | null) => void
}
  