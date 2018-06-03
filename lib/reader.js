'use strict';
const fs = require('fs');
let contents = [];

module.exports = exports = (files, callback) => {
  for(var i = 0; i < files.length; i++){
    fs.readFile(files[i], (err, data) => {
      if(err){
        callback(err);
      } else {
        contents[i] = data.toString().trim();
      }
      callback(null, contents);
    });
  }
};