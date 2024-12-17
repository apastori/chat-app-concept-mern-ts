import mongoose from 'mongoose'
import { MongoDBConnectionError } from './errors/MongoDBConnectionError'

const connectToMongoDB = async (): Promise<void> => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI)
		console.log('Connected to MongoDB')
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new MongoDBConnectionError()
		} else {
			console.error('An unknown error occurred:', error)
		}
	}
};

export { connectToMongoDB }