// worker.js
const { parentPort } = require("worker_threads");

parentPort.on("message", num => {
  let result = num * num;
  parentPort.postMessage(result);
});
