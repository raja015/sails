/* eslint-disable handle-callback-err */
/**
 * Api1Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const User = require('../models/User');

// eslint-disable-next-line no-unused-vars
// var Bottleneck = require('bottleneck');
// eslint-disable-next-line no-unused-vars


var apiconfig =require('./apiconfig.json')['api1'];

var checkMiddleware = require('./CheckMiddleware');


module.exports = {

  // Bottleneck : require('bottleneck'),
  api1:function(req,res){

    oncheckComplete=function(err,value){
      res.send('hello from '+value +' api1');
    };
    checkMiddleware.checkCount(req,res,apiconfig,oncheckComplete);


  }
};

