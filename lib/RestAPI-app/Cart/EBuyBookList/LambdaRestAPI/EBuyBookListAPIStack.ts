import { IntegrationType, LambdaRestApi, LambdaRestApiProps, RestApi } from '@aws-cdk/aws-apigateway'
import * as cdk from '@aws-cdk/core'
import * as apigateway from '@aws-cdk/aws-apigateway'
import { PolicyDocument } from '@aws-cdk/aws-iam'
import * as lambda from '@aws-cdk/aws-lambda'
import { LambdaProvider } from '../../../../lambda/Providers'
import { rootPathTo } from '@aws-cdk/core'
import { EBuyBooksListAPIProvider } from './APIProivder'
import { DeploymentConfig } from './DeploymentConfig'
import { apiConfig } from './APIConfig'
import { booksListRequestBodyTemplate, bookslistResponseTemplate } from './IntegrationTemplates'
import { EBuyBooksListResources } from './Resources/Resources'
import { EBuyBooksListResourceMethods } from './Resources/ResourceMethods'
import { EBuyBooksListResourceIntegration } from './Resources/ResourceIntegration'
const resourceOperationName = "bookslist"
export class EBuyBooksListAPIStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string) {
        super(scope, id)
        const apiProps : apigateway.LambdaRestApiProps = {
            handler : LambdaProvider.ebuyBooksListhandler,
            restApiName : apiConfig.restAPIName,
            proxy : apiConfig.proxy,
            deploy : apiConfig.deploy,
            cloudWatchRole : false
            
        
        }
        
        
    const api =  new EBuyBooksListAPI(this,apiConfig.id,apiProps)
    // new EBuyBooksListResources().addAllResources()
    // new EBuyBooksListResourceIntegration().setupAllResourcesIntegration()
    // new EBuyBooksListResourceMethods().configureAllMethods()
    // api.deployResources()
   // EBuyBooksListAPIProvider.lamdaRestAPI = api


        //  api.root.addResource("EBuyBooksList1")
        //         .addMethod("Post",)
    }
    
}

export class EBuyBooksListAPI extends LambdaRestApi {
    constructor(scope: cdk.Construct, id: string, props: apigateway.LambdaRestApiProps) {
        super(scope, id, props)
        EBuyBooksListAPIProvider.lamdaRestAPI = this
        this.deployResources()

    }
    deployResources() {
        new EBuyBooksListResourceMethodsStack()

        const deploymentProps : apigateway.DeploymentProps =
        {api : this.root.api, 
           description : DeploymentConfig.description, 
           retainDeployments : false}
       
        EBuyBooksListAPIProvider.deployment = new apigateway.Deployment(this,DeploymentConfig.id,deploymentProps)
        const stageProps : apigateway.StageProps = {stageName : DeploymentConfig.stageName, 
            description :DeploymentConfig.stageDescription, 
            deployment : EBuyBooksListAPIProvider.deployment}
        this.deploymentStage = new apigateway.Stage(this,DeploymentConfig.stageId,stageProps)
    }
}
export class EBuyBooksListResourceMethodsStack {
    constructor() {
        // const postMethoOptions : apigateway.MethodOptions = {operationName : "bookslist",requestModels}
        
        EBuyBooksListAPIProvider.lamdaRestAPI.root.addResource("EBuyBooksList").addMethod("Post",this.booksListMethodPostIntegration())
        // EBuyBooksListAPIProvider.lamdaRestAPI.root.addResource("EBuyBooksList/book").addMethod("Post",this.getBookMethodsPostIntegration())
        // for (let key in apiConfig.resoruceMethods) {
        //     let methods = apiConfig.resoruceMethods[key]
        //     methods.forEach( (method) => {
        //         if (method === hpttpMethods.POST && key === "bookslist") {
        //              {
        //             EbuyBooksListResourceProvider.Instance.resoures[key].addMethod(method,this.booksListMethodPostIntegration())
        //             }
        //         }
        //     } )
        // }               
        apiConfig.resoruceMethods[resourceOperationName].forEach( (value) => {

       })
    }
    booksListMethodPostIntegration() : apigateway.LambdaIntegration {
        const integrationOptions : apigateway.LambdaIntegrationOptions = {proxy : false,
            allowTestInvoke : true, 
            requestTemplates :  { "application/json": booksListRequestBodyTemplate },
            integrationResponses : [{statusCode : "200", responseTemplates : {"application/json": bookslistResponseTemplate}}]
        }
            
       return new apigateway.LambdaIntegration(LambdaProvider.ebuyBooksListhandler,integrationOptions)
       
    }
   
}
// export class EBuyBooksListAPIProps implements apigateway.LambdaRestApiProps {
//     handler: lambda.IFunction
//     proxy?: boolean | undefined
//     options?: apigateway.RestApiProps | undefined
//     description?: string | undefined
//     binaryMediaTypes?: string[] | undefined
//     minimumCompressionSize?: number | undefined
//     cloneFrom?: apigateway.IRestApi | undefined
//     apiKeySourceType?: apigateway.ApiKeySourceType | undefined
//     endpointConfiguration?: apigateway.EndpointConfiguration | undefined
//     deploy?: boolean | undefined
//     deployOptions?: apigateway.StageOptions | undefined
//     retainDeployments?: boolean | undefined
//     restApiName?: string | undefined
//     parameters?: { [key: string]: string } | undefined
//     policy?: PolicyDocument | undefined
//     failOnWarnings?: boolean | undefined
//     domainName?: apigateway.DomainNameOptions | undefined
//     cloudWatchRole?: boolean | undefined
//     endpointExportName?: string | undefined
//     endpointTypes?: apigateway.EndpointType[] | undefined
//     disableExecuteApiEndpoint?: boolean | undefined
//     defaultIntegration?: apigateway.Integration | undefined
//     defaultMethodOptions?: apigateway.MethodOptions | undefined
//     defaultCorsPreflightOptions?: apigateway.CorsOptions | undefined

// }



