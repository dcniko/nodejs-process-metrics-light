'use strict';

const processMemory = {
  label: 'processMemory',
  value: process.memoryUsage()
};

module.exports = processMemory;
