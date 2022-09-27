import { Construct, Stack } from "@aws-cdk/core";
import { AddBookToCartAPIStack } from "./Cart/AddBookToCart/LambdRestAPI/AddBookToCartAPIStack";
import { EBuyBooksListAPIStack } from "./Cart/EBuyBookList/LambdaRestAPI/EBuyBookListAPIStack";

export class RestAPINestedStack extends Stack {
  constructor(scope : Construct, id : string) {
      super(scope,id)
      new AddBookToCartAPIStack(this, "AddBookToCartAPIStack")
      new EBuyBooksListAPIStack(this,"EBuyBooksListAPISTack")
  }
}