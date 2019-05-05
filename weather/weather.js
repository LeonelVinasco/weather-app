const request =require('request');

var getWeather= (lat,long, callback)=>{
  request({
  url: `https://api.darksky.net/forecast/1f7c04cd3b6d02d7bc49904ebffb58ad/${lat},${long}`,
  json:true

  },(error,response,body)=>{
    if (error){
      callback('Unable to connect to darksky1');
    }else if(response.statusCode === 400){
      callback('Unable to fetch weather');
    }else if(response.statusCode===200){

      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature

     });

    }
  });
};


module.exports={
  getWeather
}
