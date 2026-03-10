
class EnemyFactory {
    generateEnemy(genrateName) {
        class Enemy {
            constructor(name) {
                this.name = name
            }

            fly() {
                console.log(`${this.name} can fly`)
            }
        }
        return new Enemy(genrateName)
    }
}

EnemyFactory.gerateHero = function (genrateName) {
    class Hero {
        constructor(name) {
            this.name = name
        }

        swim() {
            console.log(`${this.name} can swim`)
        }
    }
    return new Hero(genrateName)
}

// can also be writtern as:
class EnemyFactory2 {
    generateEnemy(genrateName) {
        return new (class Enemy {
            constructor(name) {
                this.name = name
            }
            fly() {
                console.log(`${this.name} can fly`)
            }
        })(genrateName)
    }
}

const factory = new EnemyFactory()

const flying = factory.generateEnemy("Batman")
flying.fly() // Batman can fly

const swimming = EnemyFactory.gerateHero("Spiderman")
swimming.swim() //Spiderman can swim

console.log(EnemyFactory)
console.log(factory)
console.log(Object.getOwnPropertyNames(EnemyFactory))
// console.log(Object.getOwnPropertyNames(EnemyFactory.__proto__))
console.log(Object.getOwnPropertyNames(factory))
console.log(Object.getOwnPropertyNames(factory.__proto__))
console.log(Object.getOwnPropertyNames(flying))
console.log(Object.getOwnPropertyNames(flying.__proto__))
console.log(Object.getOwnPropertyNames(swimming))
console.log(Object.getOwnPropertyNames(swimming.__proto__))


