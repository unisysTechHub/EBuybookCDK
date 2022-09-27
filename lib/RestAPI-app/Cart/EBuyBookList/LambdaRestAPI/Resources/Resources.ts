import { apiConfig } from "../APIConfig"
import { EBuyBooksListAPIProvider } from "../APIProivder"
import { EbuyBooksListResourceProvider } from "./ResourcesProvider";

export class EBuyBooksListResources {
    constructor() {
        // const postMethoOptions : apigateway.MethodOptions = {operationName : "bookslist",requestModels}
       
    
    }
     addAllResources() {
        for (let key in apiConfig.resources) {
            let value = apiConfig.resources[key];
            EbuyBooksListResourceProvider.Instance.resoures[key] = EBuyBooksListAPIProvider.lamdaRestAPI.root.addResource(value)
        }
    }
}