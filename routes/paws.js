var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var News = require('../models/News.js');

/* GET ALL NEWS */
router.get('/', function(req, res, next) {
    News.find(function(err, items) {
        if (err) return next(err);
        res.json(items);
    });
});

/* GET SINGLE NEWS BY ID */
router.get('/:id', function(req, res, next) {
    News.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE NEWS */
router.post('/', function(req, res, next) {
    News.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE NEWS */
router.put('/:id', function(req, res, next) {
    News.findByIdAndUpdate(req,params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE NEWS */
router.delete('/:id', function(req, res, next) {
    News.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
