export class JWTVerifyError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('Error JWT Verify Error')
      // Set a custom name for the error
      this.name = 'JWTVerifyError'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, JWTVerifyError.prototype)
    }
}