import { RequestHandler, Response, Request } from "express"

export const login: RequestHandler = (_req: Request, res: Response): void => {
	res.send('login route')
}

export const logout: RequestHandler = (_req: Request, _res: Response): void => {
	console.log('loginUser')
}

export const signup: RequestHandler = (_req: Request, _res: Response): void => {
	console.log('loginUser')
}

