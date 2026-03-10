import { FactoryClass } from './factory-class'
import { FactoryFunction } from './factory-function'

// class based
const logger = FactoryClass.getLogger()

logger.warn("Warning msg")
logger.error("Error")
logger.message("msg")
logger.debug("Debug message")


//function bases
// const loggerFunction = FactoryFunction()

// loggerFunction.debug('Debug message')
// loggerFunction.warn('warn message')
// loggerFunction.error('Error message')
// loggerFunction.message('Message')



