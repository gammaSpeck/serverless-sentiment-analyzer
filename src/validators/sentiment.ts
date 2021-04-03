import { Request, Response } from 'express'
import {
  IInputPayload,
  IValidatorInputSchema,
  mValidateRequest
} from '@middlewares/validate-request'

export const vSentimentAnalyze = async (req: Request, res: Response, next) => {
  const { text } = req.body

  const payload: IInputPayload = {
    body: { text }
  }

  const schema: IValidatorInputSchema = {
    body: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          minLength: 1
        }
      },
      required: ['text'],
      additionalProperties: false
    }
  }

  return mValidateRequest(req, res, next, schema, payload)
}
