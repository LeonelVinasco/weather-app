var request=require('request');

var geocode=(address)=>{
  var encodedAddress=encodeURIComponent(address);


  //console.log(`argv+${encodedAddress}`);
  request({
    url:'https://api.nasa.gov/planetary/apod?api_key=vgeo26FRotjabELs3fhIxCQ7W1iH4CeMrwAAbzmN',
    json:true,
  },(error,response,body)=>{
    console.log(body.date);
    console.log(body.url);
    console.log(body.title);
  });

}
