import type { Document, Types } from 'mongoose'

export interface IMessageDocument extends Document {
    senderId: Types.ObjectId,
    receiverId: Types.ObjectId,
    message: string
}
