const yargs =require('yargs');
const myGeoAPI =require('./myGeoAPI.js')
const argv=yargs.argv;
var command=argv._[0];

if (command==="add"){
  myGeoAPI.addGeolocation(argv.id,argv.long,argv.lat);
}else if(command==="show"){

  var allG= myGeoAPI.getAll();
  allG.forEach((geolocation)=>myGeoAPI.printu(geolocation));
  console.log("terminado");
}else if(command==="getOne"){

if (argv.id!=undefined){
  myGeoAPI.printu(myGeoAPI.getGeoId(argv.id));
}else if (argv.long!=undefined){
  myGeoAPI.printu(myGeoAPI.getGeoLong(argv.long));
}else if (argv.lat!=undefined){
  myGeoAPI.printu(myGeoAPI.getGeoLat(argv.lat));
}else{
  console.log("Please specify a parameter");
}



}else{
  console.console.log('Command not recognized');
}
