import { Router, Request, Response } from 'express'

import { SuccessResponse } from '@libs/success-response'
import { vSentimentAnalyze } from '@validators/sentiment'

const router = Router()

router.post('/sentiment/analyze', vSentimentAnalyze, async (req: Request, res: Response) => {
  SuccessResponse.send({ res, data: 'Sentiment analyzed' })
})

export { router as sentimentRouter }
