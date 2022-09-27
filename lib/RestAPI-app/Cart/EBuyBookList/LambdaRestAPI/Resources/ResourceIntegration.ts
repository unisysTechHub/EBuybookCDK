import * as apigateway from '@aws-cdk/aws-apigateway'
import { LambdaProvider } from '../../../../../lambda/Providers'
import { apiConfig } from '../APIConfig'
import { booksListRequestBodyTemplate, bookslistResponseTemplate } from '../IntegrationTemplates'
import { EbuyBooksListIntegrationProvider } from './ResourceIntegrationProvider'
import { hpttpMethods } from './ResourceMethods'

export class EBuyBooksListResourceIntegration {
    constructor(){}

    setupAllResourcesIntegration(){
        for (let key in apiConfig.resoruceMethods) {
            let methods = apiConfig.resoruceMethods[key]
            methods.forEach( (method) => {
                if (method === hpttpMethods.POST && key === "bookslist") {
                     {                  
                          let integration =    EbuyBooksListIntegrationProvider.Instance().lambdaIntegration["bookslist"]["POST"]

                   EbuyBooksListIntegrationProvider.Instance().lambdaIntegration["bookslist"]["POST"] = integration
                    }
                }
            } )
        }   
    }
}
class BooksListMethodPostIntegration {
    public constructor(){}
    public setup() : apigateway.LambdaIntegration {
         const integrationOptions : apigateway.LambdaIntegrationOptions = {proxy : false,
             allowTestInvoke : true, 
             requestTemplates :  { "application/json": booksListRequestBodyTemplate },
             integrationResponses : [{statusCode : "200", responseTemplates : {"application/json": bookslistResponseTemplate}}]
         }
             
        return new apigateway.LambdaIntegration(LambdaProvider.ebuyBooksListhandler,integrationOptions)
        
     }
 }

