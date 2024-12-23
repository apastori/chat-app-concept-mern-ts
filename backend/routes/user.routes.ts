import { Router } from 'express'
import { protectRoute } from '../protectRoute'
import { getUsersForSidebar } from '../controllers/user.controller'

const router: Router = Router()

router.get('/', protectRoute, getUsersForSidebar)

export { router }