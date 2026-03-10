interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarish implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const saren = new Guitarish('Saren king', 'Drum')
console.log(saren.play('hit'))


/////////////////////////////
// Static -> applies directly to the class

class Peeps {
    static count: number = 0;

    static getCount(): number {
        // return Peeps.count // subclassing would break.
        return this.count // Inside a static method: this === Peeps
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

class Admin extends Peeps {}
const admin = new Admin('Sudhi')
const admin2 = new Admin('Sudhi2')
console.log("Admin Result: ", admin)
console.log("Admin Result: ", admin2)
console.log(Admin.getCount())


const john = new Peeps('John')
const ram = new Peeps('Ram')
const seeta = new Peeps('Seeta')

console.log(john.id, seeta.id, ram.id)
console.log(Peeps.count)

/////////////////////////////
// getter and setter -> 

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] { 
        return this.dataState
    }
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof(el) === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Params is not an array of strings')
    }
}

const bands = new Bands()
bands.data = ['Neil amstrong', 'Led zep']
console.log(bands.data)
bands.data = [...bands.data, 'Oxi vargese']
console.log(bands.data)

