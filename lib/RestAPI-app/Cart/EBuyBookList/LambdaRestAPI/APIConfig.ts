import { LambdaProvider } from "../../../../lambda/Providers";
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'
 class APIConfig   {
    id = "EBuybooksList-Lambda-RestAPi"
    restAPIName = "EBuyBooksList-API"
    proxy = false
    deploy  = false
    resources : {[id:string]:string} =  { "bookslist" : "EBuyBooksList" }
    resoruceMethods : {[id:string]:[string]} = {"bookslist":["POST"]}
    
}
export const apiConfig = new APIConfig()