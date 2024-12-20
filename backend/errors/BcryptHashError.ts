export class BcryptHashPasswordError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('Error Hashing Password Bcypt')
      // Set a custom name for the error
      this.name = 'BcryptHashPassword'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, BcryptHashPasswordError.prototype)
    }
}