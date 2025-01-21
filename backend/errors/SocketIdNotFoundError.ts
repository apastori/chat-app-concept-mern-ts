export class SocketIdNotFoundError extends Error {
    constructor(receiverId: string) {
      // Pass the message to the parent Error class
      super(`Socket ID not found for receiver ID: ${receiverId}`)
      // Set a custom name for the error
      this.name = 'SocketIdNotFoundError'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, SocketIdNotFoundError.prototype)
    }
}