var redis = require('redis');
var client = redis.createClient();

var redisExpireTime=require('./redisconfig.json')['redisExpireTime'];

module.exports = {

  getValueFromRedis:function(redisId,defaultValue,callback){
    console.log(redisExpireTime);
    console.log(redisId,defaultValue);
    client.get(redisId, (err, value) => {
      if(err){
        console.log(err);
        throw (err);
      }
      if(value>0){
        client.incr(redisId,(err,rply)=>{
          callback(err,rply);
        });
        // eslint-disable-next-line callback-return

      }
      else{
        // eslint-disable-next-line no-unused-vars
        client.set(redisId,defaultValue,(err,rply)=>{

          client.expire(redisId,redisExpireTime,() => {
            console.log('expire callback called');

          });
          callback(err,defaultValue);
        });

      }

    });

  }
};
