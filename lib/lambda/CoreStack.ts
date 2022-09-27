import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import { Construct, NestedStack, Stack } from '@aws-cdk/core'
import * as dynamoDB from '@aws-cdk/aws-dynamodb'
import { DatabaseProviders } from '../e_buybook-stack'
import { LambdaProvider } from './Providers'
import { lamdaRuntime } from './RuntimeEnv'
import { LambdaRestApi } from '@aws-cdk/aws-apigateway'
import {BooksListLambdaConfig} from './EbuyBooksList.ts/LambdaResourceConfig'
import { BooksListLambdaFunctionProps } from './EbuyBooksList.ts/FunctionProps'

export class ViewBooksStack extends Stack {
    constructor(scope : Construct, id : string) {
        super(scope,id)
        const handler = new lambda.Function(this,
                                  BooksListLambdaConfig.id, 
                                  BooksListLambdaConfig.functionProps)
        LambdaProvider.ebuyBooksListhandler = handler
      //  LambdaProvider.resources[BooksListLambdaConfig.id] = handler
    }
}

export class OrderBooksStack extends cdk.Stack {

}
export class CartSTack extends cdk.Stack {
  constructor (scope : cdk.Construct, id : string) {
      super(scope,id)
      const handler = new lambda.Function(this, "WidgetHandler", {
        runtime: lambda.Runtime.NODEJS_10_X, // So we can use async in widget.js
        code: lambda.Code.fromAsset("resources"),
        handler: "widgets.main"
        
      });
      LambdaProvider.widgetHandler = handler
      DatabaseProviders.EBuyBook.grantReadData(handler)
  }
}

