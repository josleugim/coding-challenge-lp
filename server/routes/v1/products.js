'use strict';
const multer = require('multer');
const productCtrl = require('../../controllers/ProductCtrl');
const productImages = multer({ dest: 'public/assets/images/products/' });

module.exports = (app) => {
    app.post('/api/v1/products', productImages.single('image'), productCtrl.post);
    app.get('/api/v1/products', productCtrl.get);
    app.get('/api/v1/products/:id', productCtrl.getById);
    app.put('/api/v1/products/:id', productImages.single('image'), productCtrl.put);
};