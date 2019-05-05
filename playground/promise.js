var asyncAdd= (a,b)=>{
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Arguments must be numbers');
    }
  },1500);
});

}

var somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve('hello promise'); //resolve is used when query go well
      //reject('Unable to fulfill promise'); //When query went bad
  },2500);

});

somePromise.then((message)=>{ //if the promise was rejected
  console.log('Success: ', message);
}, (errorMessage)=>{
  console.log('Error: ', errorMessage);
});
