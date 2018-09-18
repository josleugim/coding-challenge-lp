'use strict';

const express = require('express'),
    dotenv = require('dotenv').config();
let env = process.env.NODE_ENV = process.env.NODE_ENV || 'staging';

const app = express();
const config = require('./server/config/configuration')[env];
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);

require('./server/routes/v1/products')(app, config);
require('./server/routes/v1/home')(app, config);

app.listen(config.port, function () {
    console.log('Gulp is running the API on PORT: ' + config.port);
});