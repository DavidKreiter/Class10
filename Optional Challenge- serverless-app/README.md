\# Serverless App



Architecture:

User → S3 → Lambda → DynamoDB → CloudWatch



Description:

Static website hosted in S3 invokes Lambda function.

Lambda stores user data in DynamoDB.

CloudWatch collects logs and metrics.

