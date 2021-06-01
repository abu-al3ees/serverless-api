'use strict';
const person = require('./people-schema');
exports.handler = async (event) => {
    // code goes here
    try {
        const id = event.pathParameters ? event.pathParameters.id :null
        const {name, age} = JSON.parse(event.body);
        let newRecord = await person.update({id},{name,age});
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}