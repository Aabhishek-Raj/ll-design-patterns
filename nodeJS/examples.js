// Example of 'close' event
readStream.on('close', () => {
    console.log('Cleanup code')
})