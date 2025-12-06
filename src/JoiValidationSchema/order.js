const joi = require("joi");


const orderschema = {
    create: joi.object({
        userId : joi.string().required().trim(),
        items : joi.array().items(
            joi.object({
                productId : joi.string().required().trim(),
                quantity : joi.number().integer().min(1).max(100).required(),
                priceAtPurchase : joi.number().positive().precision(2).required()
            })
        ).min(1).required(),
        shippingAddress :joi.object({
            street : joi.string().min(5).required(),
            city : joi.string().min(2).required(),
            zipCode : joi.string().min(4).max(10).required().pattern(/^\d{5}(?:[-\s]\d{4})?$/),
            country : joi.string().min(2).required()
        }),
        paymentMethod : joi.string().valid('credit_card', 'paypal', 'bank_transfer').required(),
        totalAmount : joi.number().custom((value, helpers) => {
            const items = helpers.state.ancestors[0].items;
            const calculatedTotal = items.reduce((sum, item) => sum + (item.quantity * item.priceAtPurchase), 0);
            if (value !== calculatedTotal) {
                return helpers.error('any.invalid');
            }
            return value;
        }).required(),
        status : joi.string().valid('pending', 'processing', 'shipped', 'delivered', 'cancelled').default('pending')
    })
}





module.exports = orderschema;