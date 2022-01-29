'use strict';
const os = require('os');

const systemMetrics = {
  label: 'systemMetrics',
  get value () {
    return {
      freemem: os.freemem(),
      loadavg: os.loadavg(),
      uptime: os.uptime(),
      arch: process.arch,
      hostname: os.hostname(),
      platform: process.platform,
      totalmem: os.totalmem()
    };
  }
};

module.exports = systemMetrics;
