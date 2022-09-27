import * as cdk from '@aws-cdk/core';
import { Construct, ConstructNode, Stack } from '@aws-cdk/core';
import { CoreDatabaseStack } from './database/CoreStack'
import { NestedStack}  from './lambda/Nestedstack'
import * as dynamodb from '@aws-cdk/aws-dynamodb'
import * as lambda from '@aws-cdk/aws-lambda'
import { RestAPINestedStack } from './RestAPI-app/RestAPINestedStack';
export class Environament {
       static  Dev = "Dev"
       static  QA = "QA"
       static  Prod = "Prod"
}
const delimtter = '.'
export const qualifier = Environament.Dev + delimtter
export class DatabaseProviders {
  static EBuyBook : dynamodb.Table
}

export class EBuybookStack extends Stack {
  constructor(scope: Construct, id: string) {
  
    super(scope, id);
    console.log(this.node.path)
     new CoreDatabaseStack(this,"CoreDatbaseStack")
     console.log(DatabaseProviders.EBuyBook.node.path)
     new NestedStack(this,"lamdaFunctions")
    console.log(Stack.of(this).node.path)
    new RestAPINestedStack(this,"App-APIs")
    // The code that defines your stack goes here
  }
}

// export class DabaseStackProvider extends Construct {
//   public readonly coreDatabaseprovider : CoreDatabaseStack
//   constructor(scope: Construct, id: string) {
//     super(scope,id)
//     console.log(this.node.path)

//     this.coreDatabaseprovider = new CoreDatabaseStack(this,"CoreDaabaseStack")
    

//   }
// }
// export class CoreDtabaseSatckResourceProvider extends Construct {
//   public readonly provider : CoreDatabseResoruces

//   constructor(scope : Construct, id : "CoreDatabaseStackResourceProvider") {
//     super(scope,id)
//     this.provider = this.node.tryFindChild("CoreDatabaseResoruces") as CoreDatabseResoruces
//   }
// }
// export class LambdaStackProvider extends Construct {

// }