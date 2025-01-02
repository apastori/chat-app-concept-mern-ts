interface AuthAPIBackendResponseError {
    error: string
}

interface AuthAPIBackendResponseOK {
    _id: string,
    firstName: string,
    lastName: string,
    profilePic: string
}

export type AuthAPIBackendResponse = AuthAPIBackendResponseOK | AuthAPIBackendResponseError