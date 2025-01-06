import { BaseDocument } from "./BaseDocument"
import { AuthAPIBackendResponseOK, AuthAPIBackendResponseError } from "./AuthAPIBackendResponse"
import { Gender } from "./Gender"

export interface IUserConversationAPI extends BaseDocument, AuthAPIBackendResponseOK {
  gender: Gender
}

export type IUserConversationAPIOrError = IUserConversationAPI | AuthAPIBackendResponseError