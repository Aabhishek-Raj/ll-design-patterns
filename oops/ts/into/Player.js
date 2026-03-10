
const player = {
    name: "John Doe",
    hp: 23,
    mp: 34,
    item: []
}

const hanSolo = player
hanSolo.name = "Doe"
console.log(hanSolo)

const darthVader = player
console.log(darthVader) // even darthvader name is changed to Doe, as its just changing the reference

// Better way, But still has issues =>
const createPlayer = (name, hp, mp, item) => {
    return {
        name,
        hp,
        mp,
        item
    }
}

const handSoloF = createPlayer("Han Solo", 100, 10, ["Blaster"])
console.log(hanSolo)

const darthVaderF = createPlayer("Darth Vader", 100, 10, ["Blaster"])
console.log(darthVaderF)

// Correct way to do oops in js;
class Player {
    // age = 23 // The default value, just like this.age = 20 inside constructor.
    constructor(name, hp, mp, item) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.item = item
    }
}

const hanSoloC = new Player("han solo", 33, 3, ["Gun"])
const darkVadeC = new Player("dark vade", 13, 2, ["Knife"])





