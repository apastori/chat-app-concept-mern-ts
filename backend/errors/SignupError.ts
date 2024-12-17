export class SignupError extends Error {
    constructor(message: string) {
      // Pass the message to the parent Error class
      super('Error Signing Up Post Request: '+ message)
      // Set a custom name for the error
      this.name = 'ErrorSignup'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, SignupError.prototype)
    }
}