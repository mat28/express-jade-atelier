var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model("User");

router
      .route('/users')
      .get(function(req,res,next){
        User
            .find()
            .exec(function(err,users){
              if(err) {
                res.status(500);
                res.json(err);
              } else {
                res.json(users);
              }
            });
      })
      .post(function(req,res,next){
          User
              .create({
                name : req.body.name
              }, function(err, user){
                if(err){
                  res
                    .status(500)
                    .json(err);
                } else {
                  res
                    .status(201)
                    .json(user);
                }
              })
      });


module.exports = router;
