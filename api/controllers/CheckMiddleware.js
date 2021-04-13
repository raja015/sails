
var redisController= require('./redisController');

module.exports = {

  checkCount:function(req,res,apiconfig,callback){
    var id = req.param('id');
    var redisId=req.param('id')+apiconfig.api;

    if(!id){
      res.send('id cant be empty');
      return;
    }

    var onRedisValue=function(err,value){
      if(err){
        console.log(err);
        throw (err);
      }

      console.log('value ',value);

      User
       .findOne({
         id:id
       })
      .exec((err, data) => {
        console.log(data);
        if (err) {
          return res.json({
            error: err
          });
        }
        if (!data) {
          return res.send('user doesnt exist');
        }
        else{
          if(apiconfig[data.group]){

            if(value>apiconfig[data.group].maxcount){
              console.log('limit'+data.group);
              return res.send('limit exceed'+data.group);
            }
            else{
              callback(null,data.group);
              return;
            }
          }

        }
      });
    };
    redisController.getValueFromRedis(redisId,1,onRedisValue);

  }

};
