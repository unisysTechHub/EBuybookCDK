import {ViewBooksStack, CartSTack} from './CoreStack'
import * as Cdk from '@aws-cdk/core'
import * as dynamoDB from '@aws-cdk/aws-dynamodb'
 export class NestedStack extends Cdk.Stack {
    constructor(scope: Cdk.Construct, id: string, options?: undefined) {
        super(scope,id,options)
        new CartSTack(this, "Cart")
        new ViewBooksStack(this,"ViewBooks")
        //new ViewBooksStack(scope, "ViewBooksCartLambda")
    }
}

