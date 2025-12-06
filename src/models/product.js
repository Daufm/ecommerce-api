const mongoose = require("mongoose");



const { Schema} =  mongoose;

const productDchema = new Schema({
    name :{
        type: String,
        required : true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    price :{
        type: Number,
        required : true,
        min: 0,
    },
    description :{
        type: String,
        maxlength: 500,
    },
    category :{
        type: String,
        required : true,
        enum: ['Electronics', 'Books', 'Clothing', 'Home', 'Sports'],
    },
    stock :{
        type: Number,
        required : true,
        min: 0,
        default: 0,
    }
},
{
    timestamps: true,

})

const Product = mongoose.model("Product", productDchema);

module.exports = Product;