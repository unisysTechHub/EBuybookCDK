import * as cdk from '@aws-cdk/core'
import * as dynamodb from '@aws-cdk/aws-dynamodb'
import { EBuybookProps } from './tables/EBuyBook'
import { Construct } from '@aws-cdk/core'
import {DatabaseProviders} from '../e_buybook-stack'
import {AdminRoleStack} from '../iam/roles/admin'
export class CoreDatabaseStack extends Construct {
    scope : Construct
    constructor(scope: Construct, id: string) {
        super(scope,id)
        this.addTableResource("EBuyBook", new EBuybookProps(this))

    }
    addTableResource(name : String, props : dynamodb.TableProps ) {
        DatabaseProviders.EBuyBook =   new dynamodb.Table(this, "EBuyBook", props)
        DatabaseProviders.EBuyBook.grantFullAccess(new AdminRoleStack(this,"AddminRoleStack").role)
    }
    
}
