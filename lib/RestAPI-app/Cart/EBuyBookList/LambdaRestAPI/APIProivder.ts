import {EBuyBooksListAPI} from './EBuyBookListAPIStack'
import * as apigateway from '@aws-cdk/aws-apigateway'
export class EBuyBooksListAPIProvider {
    static lamdaRestAPI : EBuyBooksListAPI 
    static deployment : apigateway.Deployment
}