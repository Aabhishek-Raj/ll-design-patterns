
const { Worker } = require('worker_threads')
const { performance } = require('perf_hooks')

const jobs = Array.from({ length: 100 }, () => 1e8)

function chunkify(array, n) {
  let chunks = []
  for (let i = n; i > 0; i--) {
    chunks.push(array.splice(0, Math.ceil(array.length / i)))
  }
  return chunks
}

function run(jobs, concurrentWorkers) {
  const  chunks = chunkify(jobs, concurrentWorkers)
  console.log(chunks, 'CS')

  const tick = performance.now()
  let completedWorkers = 0
  
  chunks.forEach((data, i) => {
    const worker = new Worker("./chunk_worker.js")

    worker.postMessage(data)

    worker.on('message', () => {
        console.log(`Worker ${i} completed`)
        completedWorkers++

        if(completedWorkers === concurrentWorkers) {
            console.log(
                `${concurrentWorkers} worker took ${performance.now() - tick} ms`
            )
            process.exit()
        }
    })
  })
}

run(jobs, 2)