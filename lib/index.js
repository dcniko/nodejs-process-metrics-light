'use strict';

const defaultMetrics = [
  'processMemory',
  'processUptime',
  'systemMetrics'
];

class NodeProcessMetricsLight {
  constructor (metrics) {
    this._metrics = metrics || defaultMetrics;
  }

  setMetrics (metrics) {
    this._metrics = metrics;
  }

  metrics () {
    const metrics = {};
    for (const metric of this._metrics) {
      const item = require(`./metrics/${metric}`);
      metrics[item.label] = item.value;
    }
    return metrics;
  }
}

module.exports = (settings) => { return new NodeProcessMetricsLight(settings); };
