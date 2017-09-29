var express = require('express');
var router = express.Router();
var Advertising = require('../models/advertising');

router.get('/:limit', function(req, res, next){
    var limit = parseInt(req.params.limit);

    Advertising.find().limit(limit)
        .exec(function(err, advertisings){
            if(err){
                return res.status(500).json({
                title: 'An error occurred',
                error: err
                });
            }
            /*
            res.status(500).json({
                title: 'Test Error',
                error: {
                    error: 'test error',
                    other: 'other data error'
                }
            });
            */
            res.status(200).json({
                message: 'Success',
                obj: advertisings
            });
            
        });
});

router.get('/last/:lastId', function(req, res, next){
    var lastId = req.params.lastId;
 
    Advertising.find({_id: {$gt: lastId}}).sort({_id: 1 }).limit(1)
        .exec(function(err, advertisings){
            if(err){
                return res.status(500).json({
                title: 'An error occurred',
                error: err
                });
            }
            if(advertisings.length>0){
                    res.status(200).json({
                    message: 'Success',
                    obj: advertisings[0]
                });
            }
            else{
                res.status(200).json({   
                    message: 'Success',
                    obj: undefined
                });
            }
        });
        
});

router.post('/', function (req, res, next) {
    var advertising = new Advertising({
            title: req.body.title,
            content: req.body.content,
            imgUrl: req.body.imgUrl
        });
    advertising.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Advertising saved',
            obj: result
        });
    });
});


module.exports = router;