const express = require('express');
const router = express.Router();
const DataEntry = require('../models/index').dataEntry;

router.get('/', function (req, res, next) {
    DataEntry.findAll({})
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err))
    ;
});

router.get('/:id', function (req, res, next) {
    DataEntry.findOne({
            where: {
                id: req.params.id
            }
        }
    )
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err));
});

router.post('/', function (req, res, next) {
    const {latitudine, longitudine, nomePoi, tipoPoi, ingresso, valutazione} = req.body;

    DataEntry.create({
        latitudine: latitudine,
        longitudine: longitudine,
        nomePoi: nomePoi,
        tipoPoi: tipoPoi,
        ingresso: ingresso,
        valutazione: valutazione
    })
        .then(dataEntry => res.status(201).json({
            dataEntry
        }))
        .catch(error => res.status(500).json({
            error
        }));
});

router.put('/:id', function (req, res, next) {
    const dataId = req.params.id;
    const { ingresso, valutazione} = req.body;

    DataEntry.update({
    
        ingresso: ingresso,
        valutazione: valutazione
    }, {
        where: {
            id: dataId
        }
    })
        .then(dataEntry => res.status(201).json({
            dataEntry
        }))
        .catch(error => res.status(500).json({
            error
        }));
});

router.delete('/:id', function (req, res, next) {
    const data_id = req.params.id;

    DataEntry.destroy({
        where: {
            id: data_id
        }
    })
        .then( status => res.status(201).json({
            error: false
        }))
        .catch(err => res.status(500).json({
            error: false
        }));
});

module.exports = router;
