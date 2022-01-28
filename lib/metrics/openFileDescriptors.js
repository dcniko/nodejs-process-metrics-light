'use strict';
const fs = require('fs');

const openFileDescriptors = {
  label: 'openFileDescriptors',
  get value () {
    try {
      return fs.readdirSync('/proc/self/fd') - 1;
    } catch {
      return 0;
    }
  }
};

module.exports = openFileDescriptors;
