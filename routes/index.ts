import { Router } from 'express'
import { router as userRouter } from './userRoutes'


// => / 	(root)
const router = Router()

router.use('/api/users', userRouter)


export default router
