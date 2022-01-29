'use strict';
const code = require('@hapi/code');
const lab = require('@hapi/lab');
const npml = require('../')();

// Test shortcuts
const { describe, it } = exports.lab = lab.script();
const { expect } = code;


describe('Node Process Metrics Lite', () => {
  it('check default settings', () => {
    expect(npml._metrics).to.exist();
    const test = require('../')(['test']);
    expect(test._metrics).to.contain('test');
    test.setMetrics(['processMemory']);
    expect(test._metrics).to.contain('processMemory');
  });
  it('checks open file descriptors', () => {
    const ofd = require('../lib/metrics/openFileDescriptors');
    expect(ofd.value).to.be.a.number();
  });
  it('captures expected metrics synchronously', () => {
    checkMetricsNew(npml.metrics());
  });
  it('checks process active resources', () => {
    process.getActiveResourcesInfo = function () {
      return ['test', 'test'];
    };
    const par = require('../lib/metrics/processActiveResources');
    expect(par.value).to.be.an.object();
  });
  it('checks process uptime', () => {
    const metricsOld = npml.metrics();
    const metricsNew = npml.metrics();
    expect(metricsNew.processUptime).not.to.equal(metricsOld.processUptime);
  });
});

function checkMetricsNew (metrics) {
  expect(metrics.processMemory).to.be.an.object();
  expect(metrics.processMemory.rss).to.be.a.number();
  expect(metrics.processMemory.heapTotal).to.be.a.number();
  expect(metrics.processMemory.heapUsed).to.be.a.number();
  expect(metrics.processMemory.external).to.be.a.number();
  expect(metrics.processMemory.arrayBuffers).to.be.a.number();
  expect(metrics.processUptime).to.be.a.number();
  expect(metrics.processLag).to.be.a.number();
  expect(metrics.processCpu).to.be.an.object();
  expect(metrics.processMetrics).to.be.an.object();
  expect(metrics.processActiveResources).to.be.an.object();
  expect(metrics.openFileDescriptors).to.be.a.number();
  expect(metrics.systemMetrics).to.be.an.object();
  expect(metrics.systemMetrics.freemem).to.be.a.number();
  expect(metrics.systemMetrics.loadavg).to.be.an.array();
  expect(metrics.systemMetrics.uptime).to.be.a.number();
  expect(metrics.systemMetrics.arch).to.be.a.string();
  expect(metrics.systemMetrics.hostname).to.be.a.string();
  expect(metrics.systemMetrics.platform).to.be.a.string();
  expect(metrics.systemMetrics.totalmem).to.be.a.number();
  expect(metrics.version).to.be.an.object();
  expect(metrics.version.major).to.be.a.number();
  expect(metrics.version.minor).to.be.a.number();
  expect(metrics.version.patch).to.be.a.number();
}
