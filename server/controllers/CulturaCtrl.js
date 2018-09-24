'use strict';
const mongoose = require('mongoose'),
    CulturaModel = mongoose.model('Cultura');
exports.post = (req, res) => {
    const data = {};

    if(req.body.title) {
        data.title = req.body.title;
    }

    if(req.body.email) {
        data.email = req.body.email;
    }

    const cultura = new CulturaModel(data);
    cultura.save((err, cultura) => {
        const resData = {
            success: true
        };

        if(err) {
            console.error(err);
        }

        if(cultura) {
            res.status(201).json(resData);
        } else {
            resData.success = false;
            resData.message = 'No se pudo crear el registro';
            res.status(500).jscr(resData);
        }
    })
};

exports.get = (req, res) => {
    const query = {};
    const projection = { _id: 1, title: 1, email: 1 };
    const resData = {
        success: true,
        records: []
    };

    CulturaModel
        .find(query, projection)
        .lean()
        .exec((err, records) => {
            if(err) {
                console.error(err);
            }
            if(records.length > 0) {
                resData.records = records;
                res.status(200).json(resData);
            } else {
                resData.success = false;
                resData.message = 'Registros no encontrados';
                res.status(404).json(resData);
            }
        })
};