import * as lambda from '@aws-cdk/aws-lambda';
import { Code, Handler, Runtime } from '@aws-cdk/aws-lambda';
import { lambdAssetFolder, lamdaRuntime } from '../RuntimeEnv';
const ebuyBooksListHandler : string = "EBuyBooksList.handler"
export const BooksListLambdaFunctionProps : lambda.FunctionProps = {
    runtime : lamdaRuntime,
    code : lambda.Code.fromAsset(lambdAssetFolder),
    handler : ebuyBooksListHandler
}
