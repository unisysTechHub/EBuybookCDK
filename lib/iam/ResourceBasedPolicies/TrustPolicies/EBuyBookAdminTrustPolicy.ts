import * as iam from '@aws-cdk/aws-iam'
import { Effect } from '@aws-cdk/aws-iam'
import * as cdk from '@aws-cdk/core'
import { EBuybookPrincipalsProvider } from '../Principals/PrincipalsProvider'
import { EBuyBookWebidentityPrincipalStack } from '../Principals/WebIdentifyPrinicaplStack'

export class EbuyBookAdminTrustPolicyStack extends cdk.Stack{
    trustPolicy  : iam.PolicyStatement
    constructor(scope: cdk.Construct, id : string) {
        super(scope,id)
      this.trustPolicy =  new iam.PolicyStatement({sid : "Cogntio Identity",effect : Effect.ALLOW,principals : [EBuybookPrincipalsProvider.instance().cogntioIndenityPrincipal] })
    }

}