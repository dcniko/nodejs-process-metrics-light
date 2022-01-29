'use strict';

const processUptime = {
  label: 'processUptime',
  get value () { return process.uptime(); }
};

module.exports = processUptime;
