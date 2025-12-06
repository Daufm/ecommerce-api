const joi = require('joi');


const userSchemas = {
    register: joi.object({
        username : joi.string().min(3).max(30).required().trim(),
        email: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).trim(),
        password: joi.string().min(8).max(50).required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')).trim(),
        confirmPassword: joi.string().required().valid(joi.ref('password')).strip(),
        role: joi.string().valid("user", "admin").default("user")
    }),

    login : joi.object({
        email: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).trim(),
        password: joi.string().required().trim(),
    }),

    id : joi.object({
        id: joi.string().required().trim()
    })
}



module.exports = userSchemas;