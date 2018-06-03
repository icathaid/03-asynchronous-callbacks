'use strict';
let fileContents = [];
fileContents.length = 3;
module.exports.readFile = (files, cb) => {
  try {
    if(files.match(/bad/i)) {
      throw new Error('err');
    }
    if(files.match(/good/i)){
      fileContents[0] = 'good';
    }
    if(files.match(/long/i)){
      fileContents[1] = 'long';
    }
  } catch(e) {  
    return undefined;  
  }
};