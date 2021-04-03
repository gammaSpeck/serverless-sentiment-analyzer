import { app } from '../../app'
import request from 'supertest'

describe('Testing Sentiment Analyze Route: /api/sentiment/analyze', () => {
  const endpoint = '/api/sentiment/analyze'

  it('Fails when no text is sent in req.body', async () => {
    const { body } = await request(app).post(endpoint).send({}).expect(400)
    expect(body.errors[0].message).toBe(`must have required property 'text'`)
  })

  it('Fails when empty text is sent in req.body password is supplied', async () => {
    const { body } = await request(app).post(endpoint).send({ text: '' }).expect(400)
    expect(body.errors[0].message).toBe(`must NOT have fewer than 1 characters`)
  })

  it('Successfully responds with a sentiment analysis for given text', async () => {
    const { body } = await request(app).post(endpoint).send({ text: 'Hello World' }).expect(200)
    expect(body.msg).toBe('SUCCESS')
    expect(body.data).not.toBeNull()
  })

  it('Successfully responds with a positive analysis for a positive text', async () => {
    const { body } = await request(app).post(endpoint).send({ text: 'I am happy' }).expect(200)
    expect(body.msg).toBe('SUCCESS')

    const { data } = body
    expect(data.score).toBeGreaterThan(0)
    expect(data.positive[0]).toBe('happy')
  })

  it('Successfully responds with a negative analysis for a negative text', async () => {
    const { body } = await request(app).post(endpoint).send({ text: 'I am angry' }).expect(200)
    expect(body.msg).toBe('SUCCESS')

    const { data } = body
    expect(data.score).toBeLessThan(0)
    expect(data.negative[0]).toBe('angry')
  })
})
