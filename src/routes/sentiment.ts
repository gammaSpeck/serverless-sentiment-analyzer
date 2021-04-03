import { Router, Request, Response } from 'express'
import Sentiment from 'sentiment'

import { SuccessResponse } from '@libs/success-response'
import { vSentimentAnalyze } from '@validators/sentiment'

const router = Router()
const sentiment = new Sentiment()

router.post('/sentiment/analyze', vSentimentAnalyze, async (req: Request, res: Response) => {
  const { text } = req.body
  const data = sentiment.analyze(text)

  SuccessResponse.send({ res, data })
})

export { router as sentimentRouter }
