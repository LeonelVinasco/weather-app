  const fs = require('fs');
  const _ = require('lodash');
  const yargs =require('yargs');
  const request = require('request');
  const myGeoAPI =require('./leo-maps/myGeoAPI.js');
  const geoCode= require('./geocode/geocode.js');
  const weather=require('./weather/weather.js')


weather.getWeather(37.8267,-122.4233, (ErrorMessage,weatherResults)=>{
  if(ErrorMessage){
    console.log(ErrorMessage);
  }else{
    console.log(JSON.stringify(results,undefined,2);
  }
});
