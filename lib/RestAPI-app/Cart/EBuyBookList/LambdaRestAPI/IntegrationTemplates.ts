export const booksListRequestBodyTemplate = "#set($allParams = $input.params())\n" +
"{\n" +
"\"searchString\": $input.json('\$.searchString'),  \n" +
"\"maxItems\": $input.json('\$.maxItems') ,\n" +
"\"body-json\" : $input.json('\$'),\n" +
"\"params\" : {\n" +
"#foreach($type in $allParams.keySet())\n" +
"    #set($params = $allParams.get($type))\n" +
"\"$type\" : {\n" +
"    #foreach($paramName in $params.keySet())\n" +
"    \"$paramName\" : \"$util.escapeJavaScript($params.get($paramName))\"\n" +
"        #if($foreach.hasNext),#end\n" +
"    #end\n" +
"}\n" +
"    #if($foreach.hasNext),#end\n" +
"#end\n" +
"},\n" +
"\"stage-variables\" : {\n" +
"#foreach($key in $stageVariables.keySet())\n" +
"\"$key\" : \"$util.escapeJavaScript($stageVariables.get($key))\"\n" +
"    #if($foreach.hasNext),#end\n" +
"#end\n" +
"},\n" +
"\"context\" : {\n" +
"    \"account-id\" : \"$context.identity.accountId\",\n" +
"    \"api-id\" : \"$context.apiId\",\n" +
"    \"api-key\" : \"$context.identity.apiKey\",\n" +
"    \"authorizer-principal-id\" : \"$context.authorizer.principalId\",\n" +
"    \"caller\" : \"$context.identity.caller\",\n" +
"    \"cognito-authentication-provider\" : \"$context.identity.cognitoAuthenticationProvider\",\n" +
"    \"cognito-authentication-type\" : \"$context.identity.cognitoAuthenticationType\",\n" +
"    \"cognito-identity-id\" : \"$context.identity.cognitoIdentityId\",\n" +
"    \"cognito-identity-pool-id\" : \"$context.identity.cognitoIdentityPoolId\",\n" +
"    \"http-method\" : \"$context.httpMethod\",\n" +
"    \"stage\" : \"$context.stage\",\n" +
"    \"source-ip\" : \"$context.identity.sourceIp\",\n" +
"    \"user\" : \"$context.identity.user\",\n" +
"    \"user-agent\" : \"$context.identity.userAgent\",\n" +
"    \"user-arn\" : \"$context.identity.userArn\",\n" +
"    \"request-id\" : \"$context.requestId\",\n" +
"    \"resource-id\" : \"$context.resourceId\",\n" +
"    \"resource-path\" : \"$context.resourcePath\"\n" +
"    }\n" +
"}\n"

export const bookslistResponseTemplate = "#set($inputRoot = $input.path('\$'))\n" +
"{\n" +
"  \"statuscode\" : $inputRoot.statusCode,\n" +
"  \"bookslist\" : [\n" +
"##TODO: Update this foreach loop to reference array from input json\n" +
"#foreach($elem in $inputRoot.booksList)\n" +
" {\n" +
"    \"bookid\" : $elem.Book_Id,\n" +
"    \"title\" : \"$elem.Title,\n" +
"    \"author\" : $elem.Author,\n" +
"    \"yearOfPublish\" : $elem.YearOfPublish,\n" +
"    \"genre\" : $elem.Genre,\n" +
"    \"price\" : $elem.Price\n" +
"    \"country\" : $elem.Country\n" +
"  } \n" +
"#if($foreach.hasNext),#end\n" +
"#end\n" +
"]\n" +
"}"