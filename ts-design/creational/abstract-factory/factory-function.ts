
interface ILogger {
    error(msg: string): void
    message(msg: string): void
    warn(msg: string): void
    debug(msg: string): void
}

const developmentLogger = (): ILogger => ({
    error(msg: string): void {
        console.log('Error', msg)
    },
    message(msg: string): void {
        console.log("Message", msg)
    },
    warn(msg: string): void {
        console.log('Warning', msg)
    },
    debug(msg: string): void {
        console.log('Debug', msg)
    }
})

const productionLogger = (): ILogger => ({
    error(msg: string): void { },
    message(msg: string): void {
        console.log("Message", msg)
    },
    warn(msg: string): void {
        console.log('Warning', msg)
    },
    debug(msg: string): void { }
})

let NODE_ENV = 'Production'

export const FactoryFunction = () => {
    return NODE_ENV === 'Production' ? productionLogger() : developmentLogger()
}