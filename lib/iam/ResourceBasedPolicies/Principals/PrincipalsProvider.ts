import * as iam from '@aws-cdk/aws-iam'
import { EbuyBookAdminTrustPolicyStack } from '../TrustPolicies/EBuyBookAdminTrustPolicy'
export class EBuybookPrincipalsProvider {
    private static _instance : EBuybookPrincipalsProvider
    private constructor(){}
    public static instance() {
        if (EBuybookPrincipalsProvider._instance === undefined) {
            return  new EBuybookPrincipalsProvider()
        }
        else {
           return EBuybookPrincipalsProvider._instance 
        }
    }

    public cogntioIndenityPrincipal : iam.WebIdentityPrincipal

    
}