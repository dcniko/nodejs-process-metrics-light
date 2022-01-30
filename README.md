# node-process-metrics-lite

Plugin based process and system metrics from a Node.js process. Includes router for Express framework.

## Basic Usage

```javascript
'use strict';
const npml = require('node-process-metrics-lite')();

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
app.get('/metrics', (req, res) => { return res.send(npml.metrics()); });

```

## API

`node-process-metrics-lite` provides the following default metrics:

* processMemory,
* processUptime,
* processLag,
* processCpu,
* processMetrics (handles and requests),
* processActiveResources,
* openFileDescriptors,
* systemMetrics,
* version (of NodeJS).

Additional modules:
  * processData,
  * systemCpu.