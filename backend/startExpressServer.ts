import type { Server } from 'http'
import { startServerCallback } from './startServerCallback'
import { ExpressServerStartError } from './errors/ExpressServerStartError'

const startExpressServer = (app: Server, port: string) => {
    app.listen(Number(port), startServerCallback).on('error', (error) => {
        throw new ExpressServerStartError(error.message)
    })
}

export { startExpressServer }