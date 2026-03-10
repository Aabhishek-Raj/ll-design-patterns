// worker.js
const { parentPort } = require("worker_threads")

// recieve data from main thread, and callback process on a completely sepreate thread
parentPort.on('message', (jobs) => {

  for (let job of jobs) {
      let count = 0
      for(let i = 0; i < job; i++) {
          count++
      }
  }

  // send data back to the main thread
  parentPort.postMessage('done')
})