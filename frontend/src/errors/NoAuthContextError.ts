export class NoAuthContextError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('useAuth must be used within an AuthProvider')
      // Set a custom name for the error
      this.name = 'NoAuthContextError'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, NoAuthContextError.prototype)
    }
}