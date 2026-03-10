const express = require('express')
const { Worker } = require('worker_threads')

const THREAD_NO = 4

const app = express()

const createWorker = () => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./express_optimized-worker.js', {
            workerData: {
                thread_count: THREAD_NO
            }
        })

        worker.on('message', (data) => {
            resolve(data)
        })
        worker.on('error', (err) => {
            reject(`An error occured ${err}`)
        })
    })
}

app.get('/non-blocking', (req, res) => {
    res.status(200).send('This page is non-blocking')
})
app.get('/blocking', async (req, res) => {

    const workerPomises = []
    for(let i= 0; i < THREAD_NO; i++) {
       workerPomises.push(createWorker())
    }
    const threadResult = await Promise.all(workerPomises)
    console.log(threadResult)
    const total = threadResult[0] + threadResult[1] + threadResult[2] + threadResult[3]
    res.status(200).send(`Result ${total}`)
    
})


app.listen(3000, () => {
    console.log('Server listening at port 3000')
})