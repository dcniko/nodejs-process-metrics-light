'use strict';

const processMemory = {
  label: 'processMemory',
  get value () { return process.memoryUsage(); }
};

module.exports = processMemory;
