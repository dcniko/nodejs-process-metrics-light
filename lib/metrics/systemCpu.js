'use strict';
const os = require('os');

const systemCpu = {
  label: 'systemCpu',
  get value () { return os.cpus(); }
};

module.exports = systemCpu;
