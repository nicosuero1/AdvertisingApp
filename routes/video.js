var express = require('express');
var router = express.Router();
var Video = require('../models/video');

router.get('/', function(req, res, next){

    Video.find()
        .exec(function(err, videos){
            if(err){
                return res.status(500).json({
                title: 'An error occurred',
                error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: videos
            });
        });
});

router.post('/', function (req, res, next) {
    var video = new Video({
        url: req.body.url,
        description: req.body.description
    });
    video.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Video saved',
            obj: result
        });
    });
});

router.delete('/:id', function(req, res, next){
    Video.findById(req.params.id, function(err, video){
        if(err){
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if(!video){
            return res.status(500).json({
                title: 'No message Found!',
                error: {message: 'Message not found'}
            });
        }

        video.remove(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted VIdeo',
                obj: result
            });
        });
    });
});


module.exports = router;