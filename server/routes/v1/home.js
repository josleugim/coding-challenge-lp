'use strict';
const path = require('path');
module.exports = (app, config) => {
    app.get('*', (req, res) => {
        res.sendFile(config.rootPath + 'public/home.html');
    });
};