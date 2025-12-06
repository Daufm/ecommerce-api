
const joi  = require('joi');


const createProductSchema =  {
    create : joi.object({
        name: joi.string().min(3).max(30).required(),
        price: joi.number().positive().precision(2).required(),
        description: joi.string().max(500).optional(),
        category: joi.string().valid('Electronics', 'Books', 'Clothing', 'Home', 'Sports').required(),
        stock: joi.number().integer().min(0).required().default(0)
    }
    ),

    update : joi.object({
        name: joi.string().min(3).max(30).optional(),
        price: joi.number().positive().precision(2).optional(),
        description: joi.string().max(500).when('category', {
            is: 'Books',
            then: joi.string().min(20).required(),
            otherwise: joi.string().max(500).optional()
        }),
        category: joi.string().valid('Electronics', 'Books', 'Clothing', 'Home', 'Sports').optional(),
        stock: joi.number().integer().min(0).optional()
    }),

    id: joi.object({
        id : joi.number().integer().positive().required()
    })
}

module.exports = createProductSchema;


