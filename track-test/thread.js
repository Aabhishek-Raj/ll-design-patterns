const { Worker } = require('worker_threads')

const worker = new Worker('./worker.js')

worker.on('message', (msg) => {
    console.log('From worker: ', msg)
})

worker.postMessage(5)

// function _worker() {
//     parentPort.on('message', (num) => {
//         let res = num * num
//         parentPort.postMessage(res)
//     })
// }