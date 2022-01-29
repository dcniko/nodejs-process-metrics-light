'use strict';

const processLag = {
  label: 'processLag',
  get value () {
    const v1 = process.uptime();
    const v2 = process.uptime();
    return v2 - v1;
  }
};

module.exports = processLag;
