export class MongoDBConnectionError extends Error {
    constructor(message?: string) {
        super(message ? message : "")
        this.name = "Error establishing MongoDB Database connection"
        Error.captureStackTrace(this, this.constructor)
    }
}