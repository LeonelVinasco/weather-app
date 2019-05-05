var request=require('request');
console.log('imhere');
var getGeocode=(address,callback)=>{
  var encodedAddress=encodeURIComponent(address);
console.log('imhere2');


  //console.log(`argv+${encodedAddress}`);
  request({

    url:'https://api.nasa.gov/planetary/apod?api_key=vgeo26FRotjabELs3fhIxCQ7W1iH4CeMrwAAbzmN',
    json:true,
  },(error,response,body)=>{
  console.log('imhere3');
      callback(undefined,{
        title: body.title,
        date: body.date,
        hdurl:body.hdurl,
        explanation:body.explanation,
        lat:37.8267,
        long:-122.4233
     });


}

);
}
module.exports={
  getGeocode
}
