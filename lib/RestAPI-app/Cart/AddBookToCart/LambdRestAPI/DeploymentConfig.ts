import * as apigateway from '@aws-cdk/aws-apigateway'
import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import { LambdaProvider } from '../../../../lambda/Providers';
export const addBookToCartDeploymentConfig = {
    descripiton : "Initial version",
    stageName : "Dev"
}
// export class AddBookToCartAPIStage extends apigateway.Stage {
//     constructor(scope: cdk.Construct, id : string, props : apigateway.StageProps) {
//         super(scope,id,props)
//     }
//  }
//  export class addBookToCartAPIDeploymentProps implements apigateway.DeploymentProps  {
//     constructor(api : apigateway.IRestApi, description : string, retainDeployments : boolean) {
//         this.api = api
//         this.description = description
//         this.retainDeployments = true
//     }
//     api: apigateway.IRestApi;
//     description?: string | undefined = addBookToCartDeploymentConfig.stageName
//     retainDeployments?: boolean | undefined = true;

//  }
//  export class addBookToCartAPIDeployment extends apigateway.Deployment {
//     constructor(scope: cdk.Construct, id: string, props:apigateway.DeploymentProps)
//     {
//         super(scope,id,props)
//     }
//  }
//  export class AddBookToCartAPIStageProps implements apigateway.StageProps {
//      constructor(deployment :apigateway.Deployment, stageName : string ) {
//          this.deployment = deployment
//          this.stageName = stageName
//      }
//      deployment: apigateway.Deployment;
//      stageName?: string | undefined;
//      accessLogDestination?: apigateway.IAccessLogDestination | undefined;
//      accessLogFormat?: apigateway.AccessLogFormat | undefined;
//      tracingEnabled?: boolean | undefined;
//      cacheClusterEnabled?: boolean | undefined;
//      cacheClusterSize?: string | undefined;
//      clientCertificateId?: string | undefined;
//      description?: string | undefined;
//      documentationVersion?: string | undefined;
//      variables?: { [key: string]: string; } | undefined;
//      methodOptions?: { [path: string]: apigateway.MethodDeploymentOptions; } | undefined;
//      metricsEnabled?: boolean | undefined;
//      loggingLevel?: apigateway.MethodLoggingLevel | undefined;
//      dataTraceEnabled?: boolean | undefined;
//      throttlingBurstLimit?: number | undefined;
//      throttlingRateLimit?: number | undefined;
//      cachingEnabled?: boolean | undefined;
//      cacheTtl?: cdk.Duration | undefined;
//      cacheDataEncrypted?: boolean | undefined;
 
//  }
 