interface ILogger {
    error(msg: string): void
    message(msg: string): void
    warn(msg: string): void
    debug(msg: string): void
}

class DevelopmentLogger implements ILogger {
    error(msg: string): void {
        console.log('Error', msg)
    }
    message(msg: string): void {
        console.log("Message", msg)
    }
    warn(msg: string): void {
        console.log('Warning', msg)
    }
    debug(msg: string): void {
        console.log('Debug', msg)
    }

}

class ProductionLogger extends DevelopmentLogger implements ILogger {
    error(msg: string): void {}
    message(msg: string): void {
        console.log("Message", msg)
    }
    warn(msg: string): void {
        console.log('Warning', msg)
    }
    debug(msg: string): void {}
}

let NODE_ENV = 'Production'

export class FactoryClass {
    public static getLogger(): ILogger {
        return NODE_ENV === 'Production' ? new ProductionLogger(): new DevelopmentLogger()
    }
}