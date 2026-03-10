//if u dont wont to ever instantiate just StreeFigher, also u know
// every derived class needs that getSpecialAttack. then,
abstract class StreetFighter {
    move(): void {
        console.log(`${this.name} moves forward`);
    }
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
    }

    abstract getSpecialAttack(): string
    abstract get name(): string
}

// const fighter = new StreetFighter() // Cannot create an instance of an abstract class.

class Chan extends StreetFighter {
    getSpecialAttack(): string {
        return `Hoo hoo!!`
    }
    get name(): string {
        return 'Chan'
    }
}

const chan = new Chan()
console.log(chan.getSpecialAttack())
chan.move();
chan.fight()