'use strict';
const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.db);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('DB opened...');
    });
};