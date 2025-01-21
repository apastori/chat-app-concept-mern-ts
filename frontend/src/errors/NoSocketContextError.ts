export class NoSocketContextError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('useSocket must be used within an SocketProvider')
      // Set a custom name for the error
      this.name = 'NoSocketContextError'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, NoSocketContextError.prototype)
    }
}