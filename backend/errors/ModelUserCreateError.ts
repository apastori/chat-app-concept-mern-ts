export class ModelUserCreateError extends Error {
    constructor() {
      // Pass the message to the parent Error class
      super('Error Creating ModelUser')
      // Set a custom name for the error
      this.name = 'ModelUserCreate'
      // Set the prototype explicitly for correct inheritance
      Object.setPrototypeOf(this, ModelUserCreateError.prototype)
    }
}