
class Criketer {}

const sachin = new Criketer()

console.log(sachin)
console.log(Object.getOwnPropertyNames(sachin))
console.log(Object.getOwnPropertyNames(sachin.__proto__)) // [ 'constructor' ]

function AnotherCriketer() {}

const doni = new AnotherCriketer()

console.log(doni)
console.log(Object.getOwnPropertyNames(doni))
console.log(Object.getOwnPropertyNames(doni.__proto__)) // [ 'constructor' ]

const ArrowAnotherPlayer = () => {}
// const player = new ArrowAnotherPlayer() // TypeError: AnotherPlayer is not a constructor

class Player {
    constructor(name, item) {
        this.name = name
        this.item = item
    }
    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`)
    }
}

const player = new Player()

console.log(player)
console.log(Object.getOwnPropertyNames(player)) // [ 'name', 'item' ]

// speak is in the prototype for player, not in the instance
console.log(Object.getOwnPropertyNames(player.__proto__)) // [ 'constructor', 'speak' ]


function AnotherPlayer(name, item) {
    this.name = name
    this.item = item
    // this.speak = function (phrase) { // This will act just instance, not a prototype
    // console.log(`${this.name} says: ${phrase}`)
    // }
}

AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`)
}

const anotherPlayer = new AnotherPlayer("Dark ray", 'item')

console.log(anotherPlayer)
console.log(Object.getOwnPropertyNames(anotherPlayer)) // [ 'name', 'item' ]

// Here speak is in the prototype for player, not in the instance
console.log(Object.getOwnPropertyNames(player.__proto__)) // [ 'constructor', 'speak' ]