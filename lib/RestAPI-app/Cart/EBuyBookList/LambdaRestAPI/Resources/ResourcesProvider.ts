
import * as apigateway from '@aws-cdk/aws-apigateway'
export class EbuyBooksListResourceProvider {
    private static _instance: EbuyBooksListResourceProvider;

    private constructor(){}

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
    resoures : {[id:string]: apigateway.Resource };
}