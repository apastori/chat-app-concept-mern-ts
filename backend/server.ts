import express, { Application, Request, Response }  from 'express'
import cookieParser from 'cookie-parser'
import { ProcessEnvFinal } from './loadEnv'
import { startExpressServer } from './startExpressServer'
import authRoutes from './routes/auth.routes'
import { router as messageRoutes } from './routes/message.routes'
import { router as userRoutes } from './routes/user.routes'
import { app, server } from "./socket/socket"

Object.assign(process.env, ProcessEnvFinal)

//const app: Application = express()

const PORT: string | '5000' = process.env['PORT'] || '5000'

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use("/api/users", userRoutes)

startExpressServer(app, PORT)

