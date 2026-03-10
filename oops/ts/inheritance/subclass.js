
class Player {
    constructor(name, items) {
        this.name = name
        this.items = items
    }
}

class Warrior extends Player {
    constructor(name, items, men) {
        super(name, items) // its doing this super.constructor()
        this.men = men
        console.log(super.constructor) // [class Player] ie, constuctor of player
    }
}

const player = new Player("Player", [])

const warrior = new Warrior("Genghis Khan", ["Sheild"], 100)

console.log(player)
console.log(warrior)