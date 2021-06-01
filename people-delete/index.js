const person = require('./people-schema');
exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
         
         let record = await person.delete({id});
        return {
            statusCode: 200,
            body: JSON.stringify(record)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}