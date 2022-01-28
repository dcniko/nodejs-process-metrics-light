'use strict';

const defaultMetrics = [
  'processMemory',
  'processUptime',
  'processCpu',
  'processMetrics',
  'processActiveResources',
  'openFileDescriptors',
  'systemMetrics',
  'version'
];

class NodeProcessMetricsLight {
  constructor (metrics) {
    this._metrics = metrics || defaultMetrics;
  }

  setMetrics (metrics) {
    this._metrics = metrics;
  }

  async metrics () {
    const metrics = {};
    for (const metric of this._metrics) {
      const item = await require(`./metrics/${metric}`);
      metrics[item.label] = item.value;
    }
    return metrics;
  }
}

module.exports = (settings) => { return new NodeProcessMetricsLight(settings); };
