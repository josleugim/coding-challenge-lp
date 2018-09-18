'use strict';
const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    staging: {
        db: 'mongodb://josleugim:bruj3ria@ds261342.mlab.com:61342/coding-challenge-lp',
        rootPath: rootPath,
        port: 8081
    }
};