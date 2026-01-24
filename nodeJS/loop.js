

// node myFile.js (program starting..)

const pendingTimers = []
const pendingOSTasks = [] // OS async tasks (async.js)
const pendingOperations = [] // tasks on Thread Pool (threads.js)

// New timers, tasks, operations are recorded from myFile runnin
myFile.runContents()

function shouldContinue() {
    // Check one: Any pending setTimeout, setInterval, setImmediate?
    // Check two: Any pending OS tasks? (like server listening to port)
    // Check three: Any pending long running operations? (like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one "tick"
while(shouldContinue()) {

    // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setIntervel

    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks.

    // 3) Pause execution. Continue when...
    //    - a new pendingOSTask is done
    //    - a new pendingOperation is done
    //    - a timer is about to complete

    // 4) Look for pendingTimers. call any setImmediate

    // 5) Handle any 'close' events

}

// exit back to terminal (program over & exiting..)
