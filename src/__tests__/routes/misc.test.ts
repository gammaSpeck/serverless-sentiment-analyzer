import { app } from '../../app'
import request from 'supertest'
import { SuccessResponse } from '@libs/success-response'

describe('Testing Misc Routes', () => {
  it('Successful healthcheck: /healthcheck', async () => {
    const { body } = await request(app).get('/healthcheck').send().expect(200)
    expect(body.data).toBeNull()
    expect(body.msg).toBe('⚡⚡⚡ Hello ⚡⚡⚡ - MD Sentiment analyzer is healthy 💗')
  })

  it('Gets 404 for any non existent route', async () => {
    const { body } = await request(app).get('/randomRoute').send().expect(404)
    expect(body.errors[0].message).toBe('Route not found')
  })

  it('Gets 500 for any unexpected errors', async () => {
    // Stub the implementation to simulate unexpected error
    jest.spyOn(SuccessResponse, 'send').mockImplementation(() => {
      throw new Error('Unexpected error')
    })
    const { body } = await request(app).get('/healthcheck').send().expect(500)
    expect(body.errors[0].message).toBe('Something went wrong')
  })
})
