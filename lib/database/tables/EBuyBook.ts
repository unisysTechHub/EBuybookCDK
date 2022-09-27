import * as cdk from '@aws-cdk/core'
import * as dynamoDB from '@aws-cdk/aws-dynamodb'
import { IStream } from '@aws-cdk/aws-kinesis'
import { IKey } from '@aws-cdk/aws-kms'
import { Construct } from '@aws-cdk/core'
import { tables } from '../Constants'

export class EBuybookProps implements dynamoDB.TableProps {
    
    constructor(scope : Construct) {

    }
    tableName?: string | undefined = tables.EBuyBook.tableName
    partitionKey: dynamoDB.Attribute =  {name : "book_id", type : dynamoDB.AttributeType.STRING }
    kinesisStream?: IStream | undefined
    readCapacity?: number | undefined
    writeCapacity?: number | undefined
    billingMode?: dynamoDB.BillingMode | undefined
    pointInTimeRecovery?: boolean | undefined
    serverSideEncryption?: boolean | undefined
    encryption?: dynamoDB.TableEncryption | undefined
    encryptionKey?: IKey | undefined
    timeToLiveAttribute?: string | undefined
    stream?: dynamoDB.StreamViewType | undefined
    removalPolicy?: cdk.RemovalPolicy | undefined
    replicationRegions?: string[] | undefined
    replicationTimeout?: cdk.Duration | undefined
    waitForReplicationToFinish?: boolean | undefined
    contributorInsightsEnabled?: boolean | undefined
    sortKey?: dynamoDB.Attribute | undefined
    

}