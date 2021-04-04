# Serverless Sentiment Analyzer

This is a NodeJS serverless REST application written around the npm package of [sentiment](https://www.npmjs.com/package/sentiment) to perform **sentiment analysis** on a text input.
It was built using the [Serverless framework](https://www.serverless.com/). The Cloud framework the deployment is for is AWS.

It fulfills the following checkpoints for any Serverless Express App:

- Good project structure
- Error handling (Sync and Async errors)
- Robust validation layer using [AJV](https://www.npmjs.com/package/ajv)
- Integration test cases with the [Jest](https://jestjs.io/) framework
- Modularity in code
- Prettier configured to maintain a consistent coding style

<hr>
<br>

## Prerequisites

    > npm i -g serverless aws-sdk

## Getting started

    > yarn # Installs all the packages
    > yarn dev # Runs the express app locally on localhost:3000

## Integration Testing

    > yarn test # Runs the Jest test suits once
    > yarn test:watch # Runs Jest in watch mode => Use it during development
    > yarn test:coverage # Runs Jest test coverage report => Aim to keep it above 95%

## Test exposed endpoint

```shell
curl --location --request POST 'http://localhost:3000/dev/api/sentiment/analyze' --header 'Content-Type: application/json' --header 'x-api-key: <YOUR_API_KEY>' --data-raw '{ "text":"I am happy" }'
```

<hr>
<br>

# Deployment

    # Configure your AWS_KEY and SECRET_KEY. Make sure you have correct IAM permissions to deploy the features onto AWS
    > aws configure

    > yarn deploy # Deploys the serverless app on API Gateway stage 'dev' by default
    > yarn deploy:prod # Deploys the serverless app on API Gateway stage 'prod' => Check package.json

<hr>
<br>

## Future scope

1. Write out a [Swagger.io](https://swagger.io) API documentation using the OPEN API 3 Specification.
2. Build out more features and expose more endpoints for the sentiment analyzer. (🤷‍♂️️)
