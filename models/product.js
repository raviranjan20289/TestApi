const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name : {
        type: String,
        required: [true, "name must be provided"],
    },

    price : {
        type: Number,
        required: [true, "price must be needed"],
    }, 
    featured: {
        type: Boolean,
        default: false,
    },

    rating: {
        type: Number,
        default: 4.9,
    },

    createdAt: {
        type: Date,
        default:Date.now(),
    },

    company: {
        type: String,
        enum: {
            values:["apple", "samsung", "lenovo", "realMe"],
            message:`{VALUE} is not supported`,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);