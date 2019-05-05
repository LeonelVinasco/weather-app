const fs = require('fs');
const _ = require('lodash');
const yargs =require('yargs');
const request = require('request');
const myGeoAPI =require('./leo-maps/myGeoAPI.js');

request({
  url:'https://api.nasa.gov/planetary/apod?api_key=',
  //json:true,
  eventUri:'http://eventregistry.org/event/eng-4766398',
  resultType: 'articleUris',
  keyword:'trump',

},(error,response,body)=>{
  console.log(body);
});
