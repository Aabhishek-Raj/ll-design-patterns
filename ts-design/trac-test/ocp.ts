class Interest {
    calculate(amount: number, type: string) {
        if(type === 'house') {
            return amount * 0.7
        }
        if(type === 'car') {
            return amount * 0.9
        }
        if(type === 'personal') {
            return amount * 0.12
        }
    }
}

interface IInterest {
    calculate(amount: number): number
}

class HouseInterest {
    calculate(amount: number) {
        return amount * 0.08
    }
}
class CarInterest {
    calculate(amount: number) {
        return amount * 0.09
    }
}
class PersonalInterest {
    calculate(amount: number) {
        return amount * 0.12
    }
}

class InterestFactory {
    private factory
    constructor(interestFactory: IInterest) {
        this.factory = interestFactory
    }

    calculate(amount: number) {
        console.log('amount', this.factory)
        return this.factory.calculate(amount)
    }
}

const interestFactory = new InterestFactory(new CarInterest())

console.log(interestFactory.calculate(5000))