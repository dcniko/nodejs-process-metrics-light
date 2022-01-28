'use strict';

const version = {
  label: 'version',
  get value () {
    const version = process.version;
    const versionSegments = version.slice(1).split('.').map(Number);
    return {
      v: version,
      major: versionSegments[0],
      minor: versionSegments[1],
      patch: versionSegments[2]
    };
  }
};

module.exports = version;
