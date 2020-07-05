# Serverless Framework and Google Cloud Functions
A basic example of using the [Serverless Framework](https://www.serverless.com/)
to manage a Google Cloud Function.

The cloud function estimates Pi using the [Monte Carlo](https://academo.org/demos/estimating-pi-monte-carlo/)
method, with a default 10,000 iterations

## Pre-requisites
You will need npm and the serverless framework installed, and have an account with the
Google Cloud Platform. Configure your Google credentials based on [this link](https://serverless.com/framework/docs/providers/google/guide/credentials/)

## To deploy
Run

```npm install```

Followed by

```sls deploy```

Once your function is deployed, you can test the function through the Google Cloud console.
