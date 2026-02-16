const { Worker } = require('worker_threads');

console.time('heavy-task');

console.log('Starting worker...');

const worker = new Worker('./with_worker.js');

worker.on('message', (result) => {
  console.log('Result from worker:', result);
  console.timeEnd('heavy-task');
});

setTimeout(() => {
  console.log('Timeout executed (main thread free)');
}, 0);
