export class BcryptCompareError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('Error Compare Bcrypt Password')
      // Set a custom name for the error
      this.name = 'BcryptComparePassword'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, BcryptCompareError.prototype)
    }
}