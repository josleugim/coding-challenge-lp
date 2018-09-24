'use strict';
const culturaCtrl = require('../../controllers/CulturaCtrl');

module.exports = (app) => {
    app.post('/api/v1/cultura', culturaCtrl.post);
    app.get('/api/v1/cultura', culturaCtrl.get);
};