var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var News = require('../models/News.js');
var Pets = require('../models/Pets.js');

/***************************
 * News
 ***************************/

/* GET ALL NEWS */
router.get('/news', function(req, res, next) {
    // TODO: Use queries for filters
    News.find(function(err, items) {
        if (err) return next(err);
        res.json(items);
    });
});

/* GET SINGLE NEWS BY ID */
router.get('/news/:id', function(req, res, next) {
    News.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE NEWS */
router.post('/news/', function(req, res, next) {
    News.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE NEWS */
router.put('/news/:id', function(req, res, next) {
    News.findByIdAndUpdate(req,params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE NEWS */
router.delete('/news/:id', function(req, res, next) {
    News.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET ALL ANIMALS */
router.get('/pets', function(req, res, next) {
    Pets.find(function(err, items) {
        if (err) return next(err);
        res.json(items);
    });
});

module.exports = router;
