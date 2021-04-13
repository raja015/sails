/**
 * Api2Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var apiconfig =require('./apiconfig.json')['api2'];
var checkMiddleware = require('./CheckMiddleware');


module.exports = {

  // Bottleneck : require('bottleneck'),
  api2:function(req,res){

    // eslint-disable-next-line handle-callback-err
    oncheckComplete=function(err,value){
      res.send('hello from '+value +' api2');
    };
    checkMiddleware.checkCount(req,res,apiconfig,oncheckComplete);


  }
};
