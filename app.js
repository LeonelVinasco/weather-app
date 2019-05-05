// const fs = require('fs');
// const _ = require('lodash');
// const yargs =require('yargs');
// const request = require('request');
// const myGeoAPI =require('./leo-maps/myGeoAPI.js');
// const geoCode= require('./geocode/geocode.js');
//
// const argv = yargs
// .options({
//    a:{
//      demand:true,
//      alias:'address',
//      describe: 'address to fetch weather for',
//      string: true //to make sure user add data
//    }
// })
// .help()
// .alias('help','h')
// .argv;
//1f7c04cd3b6d02d7bc49904ebffb58ad
const request =require('request');

request({
ulr: 'https://api.darksky.net/forecast/1f7c04cd3b6d02d7bc49904ebffb58ad/37.8267,-122.4233',
json:true

},(error,response,body)=>{
  if (error){
    console.log('Unable to connect to darksky')
  }else if(response.statusCode === 400){
    console.log('Unable to fetch weather');
  }else if(response.statusCode===200){
    console.log('body.currently.temperature');
  }
})
