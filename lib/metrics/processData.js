'use strict';

const processData = {
  label: 'processData',
  value: {
    argv: process.argv,
    execArgv: process.execArgv,
    execPath: process.execPath,
    mainModule: require.main.filename,
    pid: process.pid,
    ppid: process.ppid,
    title: process.title,
    versions: process.versions
  }
};

module.exports = processData;
