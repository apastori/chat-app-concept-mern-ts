import { Environment } from './Environment'

export interface IProcessEnv {
    PORT: string,
    ENV: Environment,
    DB_NAME: string,
    DB_PORT: string,
    HOST: string,
    MONGO_DB_URI: string,
    JWT_SECRET: string
}