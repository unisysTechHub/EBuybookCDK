import * as apigateway from '@aws-cdk/aws-apigateway'
import { EbuyBooksListResourceProvider } from './ResourcesProvider';
export class EbuyBooksListIntegrationProvider {
    private static _instance : EbuyBooksListIntegrationProvider
    private constructor() {}
    public static  Instance()  {
        return  this._instance || (this._instance = new this());
     }
     lambdaIntegration : {[resource:string] : {[method:string]:apigateway.LambdaIntegration}}
}

