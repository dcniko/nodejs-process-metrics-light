'use strict';

const processCpu = {
  label: 'processCpu',
  get value () { return process.cpuUsage(); }
};

module.exports = processCpu;
