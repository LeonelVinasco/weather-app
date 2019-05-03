
var getUser = (id,callback)=>{
debugger;
  var user= {
    id:id,
    name: 'Leo'
  };
setTimeout(()=> {
    callback(user);
}, 1000);

};

getUser(31, (userObject)=>{
  console.log(userObject);
});
