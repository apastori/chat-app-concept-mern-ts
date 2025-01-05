export interface AuthAPIBackendResponseError {
    error: string
}

export interface AuthAPIBackendResponseOK {
    _id: string,
    firstName: string,
    lastName: string,
    userName: string,
    profilePic: string
}

export type AuthAPIBackendResponse = AuthAPIBackendResponseOK | AuthAPIBackendResponseError