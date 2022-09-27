
import * as apigateway from '@aws-cdk/aws-apigateway';
import { LambdaRestApi, LambdaRestApiProps } from '@aws-cdk/aws-apigateway';
import { Construct, Stack } from "@aws-cdk/core";
import { LambdaProvider } from '../../../../lambda/Providers';
import { APIConfig } from './APIConfig';
import { addBookToCartDeploymentConfig } from './DeploymentConfig';
export class AddBookToCartAPIStack extends Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id)
        const apiProps: apigateway.LambdaRestApiProps = {
            restApiName: APIConfig.apiName,
            handler: LambdaProvider.widgetHandler,
            proxy : false
        }
        const api = new AddBookToCartLambdRestpi(
            this,
            "AddToCartLambdRestAPI",
            apiProps)
        let resource = api.root.addResource("addBookToCart")
        resource.addMethod("POST")

    }


}

export class AddBookToCartLambdRestpi extends LambdaRestApi {
    constructor(scope: Construct, id: string, props: LambdaRestApiProps) {
        super(scope, id, props)
        const deployment = new apigateway.Deployment(this, "AddToCartDeployment", {
            api: this.root.api,
            description: addBookToCartDeploymentConfig.descripiton,
            retainDeployments: false
        })
        this.deploymentStage = new apigateway.Stage(
            deployment,
            "AddToCartAPIDeployStage",
            {
                deployment: deployment,
                stageName: addBookToCartDeploymentConfig.stageName
            })
    }

}

// class AddBookToCartLambdaAPIProps implements apigateway.LambdaRestApiProps {
//     constructor(restApiName : string,lambaHandler : lambda.IFunction ) {
//      this.restApiName = restApiName
//      this.handler = lambaHandler
//     }
//     apiKeySourceType?: apigateway.ApiKeySourceType = apigateway.ApiKeySourceType.HEADER
//     handler: lambda.IFunction 
//     proxy?: boolean = true;
//    deploy?: boolean | undefined = false
//    deployOptions?: apigateway.StageOptions | undefined 
//    retainDeployments?: boolean | undefined = false
//    restApiName?: string | undefined 
//    parameters?: { [key: string]: string; } | undefined;
//    policy?: PolicyDocument | undefined;
//    failOnWarnings?: boolean | undefined;
//    domainName?: apigateway.DomainNameOptions | undefined;
//    cloudWatchRole?: boolean | undefined = false;
//    endpointExportName?: string | undefined;
//    endpointTypes?: apigateway.EndpointType[] | undefined;
//    disableExecuteApiEndpoint?: boolean | undefined ;

// }



