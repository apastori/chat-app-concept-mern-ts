import express, { Application, Request, Response }  from 'express'
import { ProcessEnvFinal } from './loadEnv'
import { startExpressServer } from './startExpressServer'
import authRoutes from './routes/auth.routes'

Object.assign(process.env, ProcessEnvFinal)

const app: Application = express()

const PORT: string | '5000' = process.env['PORT'] || '5000'

app.use('/api/auth', authRoutes)

startExpressServer(app, PORT);

