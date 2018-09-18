'use strict';
const mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.post = (req, res) => {
    const data = {};

    if(req.body.name) {
        data.name = req.body.name;
    }

    if(req.body.price) {
        data.price = Number(req.body.price);
    }

    if(req.file) {
        data.image = req.file.filename;
    }

    const product = new Product(data);
    product.save((err, product) => {
        const resData = {
            success: true
        };

        if(err) {
            console.error(err);
        }

        if(product) {
            res.status(201).json(resData);
        } else {
            resData.success = false;
            resData.message = 'No se pudo crear el producto';
            res.status(500).jscr(resData);
        }
    })
};

exports.get = (req, res) => {
    const query = {};
    const projection = { name: 1, price: 1, image: 1 };
    const resData = {
        success: true,
        products: []
    };

    Product
        .find(query, projection)
        .lean()
        .exec((err, products) => {
            if(err) {
                console.error(err);
            }
            if(products.length > 0) {
                resData.products = products.map(product => {
                    return {
                        name: product.name,
                        price: product.price,
                        image: '/assets/images/products/' + product.image
                    }
                });
                res.status(200).json(resData);
            } else {
                resData.success = false;
                resData.message = 'Productos no encontrados';
                res.status(404).json(resData);
            }
        })
};