import * as iam from '@aws-cdk/aws-iam'
import * as cdk from '@aws-cdk/core'
export class EBuyBookWebidentityPrincipalStack extends cdk.Stack {
    cognitoIdentityPrincipal : iam.WebIdentityPrincipal
    constructor(scope : cdk.Construct, id : string) {
        super(scope,id)

      this.cognitoIdentityPrincipal =   new iam.WebIdentityPrincipal('cognito-identity.amazonaws.com',({
        "StringEquals": { "cognito-identity.amazonaws.com:aud": "us-east-2:12345678-abcd-abcd-abcd-123456" },
        "ForAnyValue:StringLike": {"cognito-identity.amazonaws.com:amr": "unauthenticated" },
      }))

    }
    
}