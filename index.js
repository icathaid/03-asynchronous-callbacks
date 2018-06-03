'use strict';

const fileReader = require('./lib/reader.js');

let file = '$(__dirname)/data/file.txt';
//  What is index.js supposed to do?  This is just defining a function that doesn't do anything and then calling it for the sake of calling it.

let billify = (err, data) => {
  if(err) { throw err; }
  console.log(data);
};

fileReader(file, billify);