import { Types } from "mongoose"

export interface JWTPayloadUser {
    userId: Types.ObjectId
}