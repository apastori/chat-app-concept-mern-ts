export interface BaseDocument {
    _id: string, // MongoDB document ID (usually a string on the client-side)
    createdAt: string, // Dates are usually received as ISO strings in JSON responses
    updatedAt: string,
    __v?: number // Optional since some queries might exclude it
}