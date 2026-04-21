import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('users-table')

def lambda_handler(event, context):

    user_id = str(uuid.uuid4())

    table.put_item(
        Item={
            'id': user_id,
            'message': 'Hello from serverless app'
        }
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Saved to DynamoDB')
    }