import * as cognito from '@aws-cdk/aws-cognito'
import * as cdk from '@aws-cdk/core'

export class EBuyBooksUserpoolStack extends  cdk.Stack {
     userpool : cognito.UserPool 
    constructor(scope: cdk.Construct, id : string) {
        super(scope,id)
       this.userpool = new cognito.UserPool(this, 'EBuyBookUserpool', {
            userPoolName: 'myawesomeapp-userpool',
          });
          this.userpool.identityProviders
    // this.userpool = cognito.UserPool.fromUserPoolArn(this,"EbuyBooksUserPoolFromArn","")
    }
}