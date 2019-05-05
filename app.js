  const fs = require('fs');
  const _ = require('lodash');
  const yargs =require('yargs');
  const request = require('request');
  const myGeoAPI =require('./leo-maps/myGeoAPI.js');
  const geocode= require('./geocode/geocode.js');
  const weather=require('./weather/weather.js')
  const argv = yargs
  .options({
     a:{
       demand:true,
       alias:'address',
       describe: 'address to fetch weather for',
       string: true //to make sure user add data
     }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.getGeocode(12,(errorMessage,results)=>{
  if(errorMessage){
    console.log('error maps');
  }else{
    console.log(results.lat);
    console.log(results.long);
    console.log(results.title);
    weather.getWeather(results.lat,results.long, (errorMessage,weatherResults)=>{
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(JSON.stringify(weatherResults,undefined,2));
      }
    });
  }
});
