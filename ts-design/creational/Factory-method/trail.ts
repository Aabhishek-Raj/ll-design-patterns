// sayHai, sayHello
class sayHai {
    say(msg: string, greetType: string) {
        if (greetType === 'Hai') {
            console.log(`Hai ${msg}`)
        } else {
            console.log(`Hy ${msg}`)
        }
    }
}

interface Greet {
    say: (msg: string) => void
}

class SayHai implements Greet {
    say(msg: string) {
        console.log(`Hai ${msg}`)
    }
}

class SayHello implements Greet {
    say(msg: string) {
        console.log(`Hy ${msg}`)
    }
}

abstract class GreetFactory {

    abstract createGreet(): Greet

    greet(msg: string) {
        const greeting = this.createGreet()
        greeting.say(msg)
    }
}

// Concrete creators
class SayHelloCreator extends GreetFactory {
    createGreet(): Greet {
        return new SayHello()
    }
}

class SayHaiCreator extends GreetFactory {
    createGreet(): Greet {
        return new SayHai()
    }
}

const creator = new SayHaiCreator()
// const creator = new SayHelloCreator()
creator.greet('John Doe')




