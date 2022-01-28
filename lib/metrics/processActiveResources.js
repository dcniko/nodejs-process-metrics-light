'use strict';

const processActiveResources = {
  label: 'processActiveResources',
  get value () {
    if (typeof process.getActiveResourcesInfo !== 'function') {
      return {};
    }
    const resources = process.getActiveResourcesInfo();
    const data = {};

    for (const res of resources) {
      data[res] = data[res] ? data[res] + 1 : 1;
    }
    return data;
  }
};

module.exports = processActiveResources;
