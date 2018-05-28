'use strict';

jest.mock('fs');

const read = require('../lib/reader.js');

describe('File Reader Module', () => {
  it('should return an error when given a bad file', () => {
    let file = '${__dirname}/../../data/bad.txt';
    read(file, (err, data) => {
      expect(err).toBe('Invalid File');
    });
  });
  it('should not return an error if passed a good file', () => {
    let file = '${__dirname}/../../data/good.txt';
    read(file, (err, data) => {
      expect(err).toBe(undefined);
    });
  });
});