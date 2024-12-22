import type { IUserDocRequestExp } from 'IUserDocRequestExp'

declare global {
    namespace Express {
      interface Request {
        user?: IUserDocRequestExp
      }
    }
}