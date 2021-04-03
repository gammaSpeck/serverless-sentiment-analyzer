import { Router } from 'express'
import { sentimentRouter } from './sentiment'

const router = Router()
router.use(sentimentRouter)

export { router as allRoutes }
