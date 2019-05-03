const fs = require('fs');
const _ = require('lodash');
const yargs =require('yargs');
const myGeoAPI =require('./playground/myGeoAPI.js')
const argv=yargs.argv;
var command=argv._[0];
