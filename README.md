# Class 10 – DevOps Assignment

## Part 1 – The regular Assignment- Consule and CLI for:
  - IAM
  - S3
  - EC2
  - VPC
  - Lambada
  - CloudWatch


## Part 2 – Optional Challenge – Serverless App

Architecture:
User → S3 Static Website → Lambda → DynamoDB → CloudWatch

Flow:
Static website invokes Lambda function using Function URL.
Lambda stores user data in DynamoDB.
CloudWatch collects logs and metrics.

Result:
Fully working serverless application.
