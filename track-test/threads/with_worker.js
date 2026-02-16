const { parentPort } = require('worker_threads');

function heavyTask() {
  let sum = 0;
  for (let i = 0; i < 2_000_000_000; i++) {
    sum += i;
  }
  return sum;
}

const result = heavyTask();
parentPort.postMessage(result);
