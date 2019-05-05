const fs = require('fs');
const _ = require('lodash');
const yargs =require('yargs');
var getAll= ()=>{
  try {
  return JSON.parse(fs.readFileSync('./leo-maps/map-locations.json'));
  } catch (e) {
  console.log("File not found");
  return undefined;
  }
}
var addGeolocation= (id,longitude,latitude)=>{
console.log("Adding note",id);
var geolocations=[];
var geolocation={
id,
longitude,
latitude
};

getAll();


geolocations.push(geolocation);
fs.writeFileSync('map-locations.json',JSON.stringify(geolocations));

};

var printu=(geo)=>{
  console.log(geo);
}

//Obtain data from specific location
var getGeoId= (id)=>  _.filter(getAll(), {'id':id});
var getGeoLong= (id)=>  _.filter(getAll(), {'longitude':id});
var getGeoLat= (id)=>  _.filter(getAll(), {'latitude':id});
module.exports={
  addGeolocation,
  getAll,
  printu,
  getGeoId,
  getGeoLong,
  getGeoLat
}
