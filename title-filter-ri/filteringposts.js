const fs = require('fs');
const _ = require('lodash');
const yargs =require('yargs');
var getAll= ()=>{
  try {
  return JSON.parse(fs.readFileSync('./title-filter-ri/posts.json'));
  } catch (e) {
  console.log("File not found");
  return undefined;
  }
}


var add= (id,title)=>{
console.log("Adding post",id);
var posts=[];
var post={
id,
title
};

getAll();


posts.push(post);
fs.writeFileSync('./title-filter-ri/simpli.json',JSON.stringify(posts));

};



var file=getAll();
//var file2=JSON.stringify(file);
file.forEach((post)=>{
  //add(post.id,post.document);
  var idt=post.document;
    console.log(JSON.stringify(post,undefined,2),'impress');

});
