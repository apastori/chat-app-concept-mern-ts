import { Request, Response, NextFunction } from 'express'

import { IMiddleware } from './types/IMiddleware'

import { connectToMongoDB } from './connectToMongoDB'
import { connect } from 'mongoose'

const startServerCallback: IMiddleware = function(_req?: Request, _res?: Response, _next?: NextFunction): void {
    connectToMongoDB()
    console.log(`Express with Typescript! http://localhost:${Number(process.env['PORT']) || 5000}`)
    if (process.env['ENV'] === 'development') console.log(process.env)
}

export { startServerCallback }