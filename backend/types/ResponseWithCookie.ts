import { Response, CookieOptions  } from 'express'

export interface ResponseWithCookies extends Response {
    cookie(name: string, value: string | object, options?: CookieOptions): this;
}