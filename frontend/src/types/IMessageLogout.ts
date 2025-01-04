import { AuthAPIBackendResponseError } from './AuthAPIBackendResponse'

interface AuthAPIBackendResponseOKLogout {
    message: string
}

export type IMessageLogout = AuthAPIBackendResponseOKLogout | AuthAPIBackendResponseError