import express, { Router } from "express"
import { sendMessage } from "../controllers/message.controller"
import { getMessages } from "../controllers/message.controller"
import { protectRoute } from "../protectRoute"

const router: Router = Router()

router.get("/:id", protectRoute, getMessages)

router.post("/send/:id", protectRoute, sendMessage)

export { router }