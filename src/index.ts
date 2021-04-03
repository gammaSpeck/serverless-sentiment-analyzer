import type { AWS } from '@serverless/typescript'
import { resolvePath } from '@libs/utils'

export const httpEventExpressApp: AWS['functions']['events'] = {
  handler: `${resolvePath(__dirname)}/handler.expressApp`,
  events: [
    {
      http: {
        method: 'get',
        path: '/',
        cors: true,
        private: true
      }
    },
    {
      http: {
        method: 'any',
        path: '/{proxy+}',
        cors: true,
        private: true
      }
    }
  ]
}
