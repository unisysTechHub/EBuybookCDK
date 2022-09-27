import * as iam from '@aws-cdk/aws-iam'
import { Role, ServicePrincipal } from '@aws-cdk/aws-iam'
import * as cognito from '@aws-cdk/aws-cognito'
import * as cdk from '@aws-cdk/core'
import { EBuybookPrincipalsProvider } from '../ResourceBasedPolicies/Principals/PrincipalsProvider'
import { EBuyBookWebidentityPrincipalStack } from '../ResourceBasedPolicies/Principals/WebIdentifyPrinicaplStack'
import { EbuyBookAdminTrustPolicyStack } from '../ResourceBasedPolicies/TrustPolicies/EBuyBookAdminTrustPolicy'
import { UserPool } from '@aws-cdk/aws-cognito'

export class AdminRoleStack extends cdk.Stack {
    role : iam.Role
    constructor(scope : cdk.Construct, id : string) {
        super(scope,id)
       // new Role(this,"AdminRole",{})
        // new cognito.CfnUserPoolIdentityProvider(this,"useridentityproide")
       // this.role.addToPrincipalPolicy(new EbuyBookAdminTrustPolicyStack(this,"").trustPolicy)
      }    
      
    
        
        
}

// export class userIdentitiyProvderdfdfd implements cognito.CfnUserPoolIdentityProviderProps{
//   providerName: string = ""
//   providerType: string = "OIDC"
//   userPoolId: string = "UserPool.id"
//   attributeMapping?: any
//   idpIdentifiers?: string[] | undefined = [""]
//   providerDetails?: any

// }