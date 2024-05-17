import { Router } from 'express'
import * as userController from '../controllers/userController'

// => /api/users/
export const router = Router()

router.route('/')
	.get(userController.getAllUsers)
