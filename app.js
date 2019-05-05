const fs = require('fs');
const _ = require('lodash');
const yargs =require('yargs');
const request = require('request');
const myGeoAPI =require('./leo-maps/myGeoAPI.js');

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

var encodedAddress=encodeURIComponent(argv.address);


console.log(`argv+${argv.address}`);
request({
  url:`https://api.nasa.gov/planetary/apod?api_key=vgeo26FRotjabELs3fhIxCQ7W1iH4CeMrwAAbzmN?city=${encodedAddress}`,
  json:true,
},(error,response,body)=>{
  console.log(body.date);
  console.log(body.url);
  console.log(body.title);
});
