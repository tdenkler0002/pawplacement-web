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
    News.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
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

/* GET ANIMALS BY BREED */
router.get('/pets/filters', function(req, res, next) {
    const query = buildFilterQuery(req.query);

    Pets.find(query,
    function (err, data) {
        if (err) {
            err.status = 406;
            return next(err);
        }
        console.log(data);
        return res.status(200).json({
            message: 'success.', data:data
        })
    })
});

router.get('/pet')

function buildFilterQuery(request) {
   let query = { "$and": []};

   if (request.breed) {
       query.$and.push({"Animal_Breed": {'$in': JSON.parse(request.breed)}});
   }

   if (request.age) {
       query.$and.push({"Age": {'$in': JSON.parse(request.age.toUpperCase())}})
   }

   if (request.gender) {
       query.$and.push({"Animal_Gender": request.gender});
   }

   if (request.type) {
       query.$and.push({"animal_type": request.type});
   }

   return query;
}

module.exports = router;
