'use strict';
const os = require('os');

const systemCpu = {
  label: 'systemCpu',
  value: os.cpus()
};

module.exports = systemCpu;
