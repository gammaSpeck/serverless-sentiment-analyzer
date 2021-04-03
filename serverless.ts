import type { AWS } from '@serverless/typescript'
import { httpEventExpressApp } from './src'

const serverlessConfiguration: AWS = {
  service: 'md-sentiment-analysis',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "${opt:stage, 'dev'}", // This is a CLI Param that will be used to differentiate environments
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      apiKeys: ['md-sentiment-analysis-key']
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_ENV: 'production'
    },
    lambdaHashingVersion: '20201221'
  },
  // import the function via paths
  functions: { expressApp: httpEventExpressApp }
}

module.exports = serverlessConfiguration
