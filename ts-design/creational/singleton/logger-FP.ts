// Module-level singleton
import logger from './logger-Class'
logger.log('Hello')

// Closure-based Singleton
type Logger = {
  log: (msg: string) => void
}

const createLogger = () => {
  let instance: Logger | null = null

  return (): Logger => {
    if (!instance) {
      instance = {
        log: msg => console.log(msg)
      }
    }
    return instance
  }
}

const getLogger = createLogger()
    
const logger1 = getLogger()
const logger2 = getLogger()

console.log(logger1 === logger2) // true

// Use closure or module scope to ensure one instance
// Most modern TS apps avoid OOP singleton
