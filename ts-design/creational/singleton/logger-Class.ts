// If u want exactly one instance of something
// and a single global access point to it.

//wrong in big systems:
class LoggerB {
  log(msg: string) {
    console.log(msg)
  }
}

const loggerB1 = new LoggerB()
const loggerB2 = new LoggerB()

// Hide the constructor and control instance creation
class Logger {
  private static instance: Logger

  // prevent `new Logger()`
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  log(message: string) {
    console.log(message)
  }
}

const logger1 = Logger.getInstance()
const logger2 = Logger.getInstance()

console.log(logger1 === logger2) // true


// Node.js truth
// In Node.js, module scope acts as a singleton.

// ie, This is already a singleton, because Node caches modules
// logger.ts
const logger = {
  log(message: string) {
    console.log(message)
  }
}

export default logger
