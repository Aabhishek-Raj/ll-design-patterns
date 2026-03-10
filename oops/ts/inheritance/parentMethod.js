
class Player {
    constructor(name, items) {
        this.name = name
        this.items = items
    }
    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }
}

class Warrior extends Player {
    constructor(name, items, men) {
        super(name, items) 
        this.men = men
        // immediately called on object creation
        super.speak('Hello !') // super will call the parent prototype, ie, [ 'constructor', 'speak' ]
        console.log(super.name) // undefined, cause super only referes to the prototype , not the instance 
    }
}

const player = new Player("Player", [])

const warrior = new Warrior("Genghis Khan", ["Sheild"], 100)

// behind warrior has protopal chainging with player, hence, if speak is not found, it will check on player
warrior.speak('Jaihind!')

console.log(player)
console.log(warrior)
console.log(Object.getOwnPropertyNames(Player))
console.log(Object.getOwnPropertyNames(player.__proto__)) 
console.log(Object.getOwnPropertyNames(warrior.__proto__))

console.log(warrior instanceof Warrior) // true
console.log(warrior instanceof Player) // true
console.log(player instanceof Warrior) // false
console.log(warrior instanceof Object) // true