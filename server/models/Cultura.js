'use strict';
const mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp');

/**
 * Model for the Cultura coding challenge
 */
const CulturaSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'The title is required'
    },
    email: {
        type: String,
        required: 'Email required'
    }
});

CulturaSchema.plugin(timestamps);
module.exports = mongoose.model('Cultura', CulturaSchema);