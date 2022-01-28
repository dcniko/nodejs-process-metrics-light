'use strict';
const code = require('@hapi/code');
const lab = require('@hapi/lab');
const npml = require('../lib')();

// Test shortcuts
const { describe, it } = exports.lab = lab.script();
const { expect } = code;


describe('Node Process Metrics Lite', () => {
  it('check default settings', () => {
    expect(npml._metrics).to.exist();
    const test = require('../lib')(['test']);
    expect(test._metrics).to.be.an.array();
    test.setMetrics(['processMemory']);
    expect(test._metrics).to.contain('processMemory');
  });
  it('captures expected metrics synchronously', () => {
    checkMetricsNew(npml.metrics());
  });
});

function checkMetricsNew (metrics) {
  console.log(metrics);
  expect(metrics.processMemory).to.be.an.object();
  expect(metrics.processMemory.rss).to.be.a.number();
  expect(metrics.processMemory.heapTotal).to.be.a.number();
  expect(metrics.processMemory.heapUsed).to.be.a.number();
  expect(metrics.processMemory.external).to.be.a.number();
  expect(metrics.processMemory.arrayBuffers).to.be.a.number();
  expect(metrics.processUptime).to.be.a.number();
  expect(metrics.systemMetrics).to.be.an.object();
  expect(metrics.systemMetrics.freemem).to.be.a.number();
  expect(metrics.systemMetrics.loadavg).to.be.an.array();
  expect(metrics.systemMetrics.uptime).to.be.a.number();
  expect(metrics.systemMetrics.arch).to.be.a.string();
  expect(metrics.systemMetrics.hostname).to.be.a.string();
  expect(metrics.systemMetrics.platform).to.be.a.string();
  expect(metrics.systemMetrics.totalmem).to.be.a.number();
}
