'use strict';

const processMetrics = {
  label: 'processMetrics',
  value: {
    handles: process._getActiveHandles().length,
    requests: process._getActiveRequests().length
  }
};

module.exports = processMetrics;
