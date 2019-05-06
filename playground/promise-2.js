const request = require('requiest');

var geocodeAddress = (address)=>{
 return new Promise((resolve,reject)=>{

   var encodedAddress=encodeURIComponent(address);

     //console.log(`argv+${encodedAddress}`);
     request({

       url:'https://api.nasa.gov/planetary/apod?api_key=vgeo26FRotjabELs3fhIxCQ7W1iH4CeMrwAAbzmN',
       json:true,
     },(error,response,body)=>{

         resolve(undefined,{
           title: body.title,
           date: body.date,
           hdurl:body.hdurl,
           explanation:body.explanation,
           lat:37.8267,
           long:-122.4233
        });


   }

   );




 });
};

geocodeAddress('12345').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
  console.log(errorMessage);
});
