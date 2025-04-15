// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "179q57haslt8mo5gi5pd6t4k78",     // CognitoClientID
  "api_base_url": "https://rmqonecnvb.execute-api.eu-north-1.amazonaws.com/prod", // Updated with /prod stage
  "cognito_hosted_domain": "mytodoappdemo-thetrainingstack.auth.eu-north-1.amazoncognito.com", // CognitoDomainName
  "redirect_url": "https://master.d23l1wacnuwzay.amplifyapp.com" // AmplifyURL
};

export default config;
