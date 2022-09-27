import * as lambda from '@aws-cdk/aws-lambda'
export class LambdaProvider {
    
    static widgetHandler : lambda.Function
    static ebuyBooksListhandler : lambda.Function
    static resources : { [id :string] :lambda.Function }
  }