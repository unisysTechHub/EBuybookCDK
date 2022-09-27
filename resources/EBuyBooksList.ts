exports.handler = async (event) => {
   if (event.LastEvaluatedKey === undefined ) {
        return {statusCode : 400, message : "Last evvaluatedKey undefined"}
    }
    else {
        return {statusCode : 200, message : event.LastEvaluatedKey}
    }
};
