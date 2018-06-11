'use strict';

jest.mock('fs');

const read = require('../lib/reader.js');
let paths = [];
for (let item of paths){
  paths.push(__dirname + '/../data/' + item + '.txt');
}
let expected, actual;

describe('File Reader Module', () => {
  it('Should return the contents of a "good" file', () => {
    let file = `${__dirname}/../data/good.txt`;
    read(file, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('good');
    });
  });
  it('should return an error if given a "bad" file', () => {
    let file = `${__dirname}/../data/bad.txt`;
    read(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toBeNull();
    });
  });
  it('should return "long" if given long.txt', () => {
    let file = `${__dirname}/../data/long.txt`;
    read(file, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('long');
    });
  });
  it('should return multiple things if given multiple filenames', () => {
    let fileOne = `${__dirname}/../data/good.txt`;
    let fileThree = `${__dirname}/../data/long.txt`;
    let files = [fileOne, fileThree];
    read(files, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('good long');
    });
  });
  it('should return an error if given multiple filenames with a "bad" file', () => {
    let fileOne = `${__dirname}/../data/good.txt`;
    let fileTwo = `${__dirname}/../data/bad.txt`;
    let fileThree = `${__dirname}/../data/long.txt`;
    let files = [fileOne, fileTwo, fileThree];
    read(files, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toBeNull();
    });
  });
  it('should return multiple books in the order they were requested', () => {
    let fileOne = `${__dirname}/../data/long.txt`;
    let fileTwo = `${__dirname}/../data/good.txt`;
    let files = [fileOne, fileTwo];
    read(files, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toBeNull;
    });
  });
});