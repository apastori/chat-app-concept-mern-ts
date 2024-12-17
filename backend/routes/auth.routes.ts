import express, { Router } from 'express'
import { login, logout, signup } from '../controllers/auth.controllers'

const router: Router = express.Router()

router.post('/login', login)

router.post('/signup', signup)

router.post('/logout', logout)

export default router