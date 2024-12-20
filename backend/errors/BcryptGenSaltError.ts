export class BcryptGenSaltError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('Error Generating Salt Bcrypt')
      // Set a custom name for the error
      this.name = 'BcryptGenSalt'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, BcryptGenSaltError.prototype)
    }
}