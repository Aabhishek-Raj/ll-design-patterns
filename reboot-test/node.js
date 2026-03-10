const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) {
        throw new Error('File not found')
    }
    console.log('file Content: ', data)
})

// Event driven Programming
const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`)
})

eventEmitter.emit('greet', 'John Doe')
eventEmitter.emit('greet', 'Mimi')

//Buffer class in Node.js

//types of streams 

//readable stream

//writable stream

// Duplex stream

// Transform stram