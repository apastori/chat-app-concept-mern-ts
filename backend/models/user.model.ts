import mongoose from 'mongoose'
import { IUser } from '../types/IUser'

export const userSchema = new mongoose.Schema<IUser,
mongoose.Model<IUser>, {}, {}, {}, {}>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    profilePic: {
        type: String,
        default: 'NoProfilePic'
    },    
}, { timestamps: true}
)

export const User = mongoose.model('User', userSchema)