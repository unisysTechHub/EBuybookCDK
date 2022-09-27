import { apiConfig } from "../APIConfig"
import { EBuyBooksListAPIProvider } from "../APIProivder"
import * as apigateway from '@aws-cdk/aws-apigateway'
import { EbuyBooksListResourceProvider } from "./ResourcesProvider"
import { booksListRequestBodyTemplate, bookslistResponseTemplate } from "../IntegrationTemplates"
import { LambdaProvider } from "../../../../../lambda/Providers"
import { EbuyBooksListIntegrationProvider } from "./ResourceIntegrationProvider"
export const hpttpMethods = {"POST" : "POST"}
export class EBuyBooksListResourceMethods {
    constructor() {
        // const postMethoOptions : apigateway.MethodOptions = {operationName : "bookslist",requestModels}
        
        // EBuyBooksListAPIProvider.lamdaRestAPI.root.addResource("EBuyBooksList/book").addMethod("Post",this.getBookMethodsPostIntegration())
                     

       
    }
    configureAllMethods() {
        for (let key in apiConfig.resoruceMethods) {
            let methods = apiConfig.resoruceMethods[key]
            methods.forEach( (method) => {
                if (method === hpttpMethods.POST && key === "bookslist") {
                     {
                    let integration =    EbuyBooksListIntegrationProvider.Instance().lambdaIntegration["bookslist"]["POST"]
                    EbuyBooksListResourceProvider.Instance.resoures[key].addMethod(method,integration)
                    }
                }
            } )
        }  
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
