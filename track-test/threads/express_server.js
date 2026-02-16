const express = require('express')
const { Worker } = require('worker_threads')

const app = express()

app.use(express.json())

app.get('/non-blocking', (req, res) => {
    res.status(200).send('This page is non-blocking')
})
app.get('/blocking', (req, res) => {

    const worker = new Worker('./express_worker.js')
    
    worker.on('message', (data) => {
        res.status(200).send(`This page is Blocking with ${data}`)
    })

    worker.on('error', (err) => {
        res.status(401).send(`Got an error, ${err}`)
    })
    
})


app.listen(3000, () => {
    console.log('Server listening at port 3000')
})