'use strict';
const mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp');

/**
 * Model for the Products
 */
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'The name is required'
    },
    price: {
        type: String,
        required: 'Price required'
    },
    image: {
        type: String,
        required: 'Image required'
    },
});

ProductSchema.plugin(timestamps);
module.exports = mongoose.model('Product', ProductSchema);