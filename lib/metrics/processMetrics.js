'use strict';

const processMetrics = {
  label: 'processMetrics',
  get value () {
    return {
      handles: process._getActiveHandles().length,
      requests: process._getActiveRequests().length
    };
  }
};

module.exports = processMetrics;
