const yargs =require('yargs');
const myGeoAPI =require('./myGeoAPI.js')
const argv=yargs.argv;
const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(<html>

<body>
  <h1> Below is the code without pre </h1>
  [ { "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
  sunt rem eveniet architecto" }, { "userId": 1, "id": 2, "title": "qui est esse", "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui
  aperiam non debitis possimus qui neque nisi nulla" } ]

  <h1> Below is the code with pre </h1>
  <pre>
     [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
     ]
     </pre>
</body>

</html>);
});
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
var command=argv._[0];

if (command==="add"){
  myGeoAPI.addGeolocation(argv.id,argv.lonnpmg,argv.lat);
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
    console.log('Command not recognized');
}
