import express, { Router } from 'express'
import { login, logout, signup } from '../controllers/auth.controllers'

const router: Router = express.Router()

router.get('/login', login)

router.get('signup', signup)

router.get('logout', logout)

export default router