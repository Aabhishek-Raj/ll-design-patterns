// class Logger {
//   log(msg: string) {}
// }

//changing this to:
class Logger {
    log(msg: string): void {
        console.log(msg)
    }
}

type LoggerType = {
    log: (msg: string) => void
}

// function based
function logger(): LoggerType {
    return {
        log: function(msg) {
            console.log(msg, "smsg") 
        }
    }
}

// arrow function 
const loggerF = (): LoggerType => ({
    log: msg => {
        console.log(msg)
    }
})

loggerF().log('Message for you')

// both class and function combined
class LoggerClass {
    constructor(private readonly logFn: (msg: string) => void) {}

    log(msg: string): void {
        this.logFn(msg)
    }
}
function logMessage(msg: string) {
    console.log(msg)
}
// const log = new LoggerClass(logMessage)
// log.log('Mssaaa')

const logg = new LoggerClass(msg => console.log(msg))
logg.log('Hello')

