const joi = require('joi');

const commonValidate = (schema) =>(req,res,next)=>{
    const errors =[];


    //validate req.params
    if(schema.params){
        const {error} =  schema.params.validate(req.params, {abortEarly :false});

        if(error){
            errors.push(...error.details.map(err=>({field : 'params.' + err.path.join('.'), message: err.message})));
        } 
        else{
            req.validateParams = schema.params.validate(req.params).value;
        }
    }

    //validate req.body
    if(schema.body){
        const {error} =  schema.body.validate(req.body, {abortEarly :false});

        if(error){
            errors.push(...error.details.map(err=>({field : 'body.' + err.path.join('.'), message: err.message})));
        } 
        else{
            req.validateBody = schema.body.validate(req.body).value;
        }
    }

    //validate req.query
    if(schema.query){
        const {error} =  schema.query.validate(req.query,{ abortEarly :false});

        if(error){
            errors.push(...error.details.map(err=>({field : 'query.' + err.path.join('.'), message: err.message})));
        } 
        else{
            req.validateQuery = schema.query.validate(req.query).value;
        }
    }

    if(errors.length > 0){
        return res.status(400).json({
            status: "error",
            message: "Validation Error",
            errors: errors
        })
    }

    next();
}


module.exports = { commonValidate };