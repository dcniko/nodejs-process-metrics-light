'use strict';

const processLag = {
  label: 'processLag',
  get value () {
    const measurements = [];
    for (let i = 0; i < 10; i++) {
      const v1 = process.uptime();
      const v2 = process.uptime();
      const lag = v2 - v1;
      measurements.push(lag);
    }
    let sum = 0;
    for (let i = 0; i < measurements.length; i++) {
      sum += measurements[i];
    }
    return sum / measurements.length;
  }
};

module.exports = processLag;
