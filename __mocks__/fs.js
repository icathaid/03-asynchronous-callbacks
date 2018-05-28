'use strict';

module.exports.readFile = (file, thingy) => {
  if(file.match(/bad/i) ) {
    thingy('Invalid File');
  }
  else {
    thingy(undefined, new Buffer('File Contents'));
  }
};