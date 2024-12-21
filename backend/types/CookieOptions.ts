export interface CookieOptions {
    maxAge?: number,
    httpOnly?: boolean,
    secure?: boolean,
    sameSite?: boolean | 'lax' | 'strict' | 'none',
    domain?: string,
    path?: string,
    expires?: Date,
}