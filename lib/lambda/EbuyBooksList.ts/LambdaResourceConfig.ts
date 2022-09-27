import * as lambda from '@aws-cdk/aws-lambda'
import { BooksListLambdaFunctionProps } from './FunctionProps'
export const BooksListLambdaConfig = {
    id : "EBuyBooksListHandler",
    lamdaRuntime  : lambda.Runtime.NODEJS_10_X,
    functionProps : BooksListLambdaFunctionProps
}