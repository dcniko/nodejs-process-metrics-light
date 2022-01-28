# node-process-metrics-light

Plugin based process and system metrics from a Node.js process. Includes router for Express framework.

## Basic Usage

```javascript
'use strict';
const npml = require('node-process-metrics-light')();

// Set required modules
npml.setMetrics([
  'processMemory', 
  'processData'
  ]);

// Use synchronously
console.log(npml.metrics());
```
```javascript
'use strict';
const app = require('express')();

// Use as an Express router
app.get('/metrics', npml.metricsRouter);

```

## API

`node-process-metrics-light` provides the following default metrics:

* processMemory,
* processUptime,
* systemMetrics.

Additional modules:
  * processData,
  * systemCpu.