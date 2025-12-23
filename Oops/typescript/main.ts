class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
        console.log(this)
    }
}

const masalaChai = new Chai("Ginger", 10)
masalaChai.flavour = 'greeni'
// console.log(masalaChai)


// Access Modifier 
// public, readonly, private, protected

class Coder {
    seconLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        console.log(`I am ${this.age}`) // only access here as it is private
    }

}
const dave = new Coder('Dave R', 'Rock', 33)
console.log(dave)

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number,) {
        super(name, music, age)
        this.computer = computer
    }
    public getLand() {
        console.log(`I write ${this.lang}`)
        //console.log(this.age) // Property 'age' is private and only accessible within class 'Coder'.
    }
}

const sara = new WebDev('Hp', 'Sara Dev', 'Rock', 3)
// console.log(sara)
// console.log(sara.lang) // 'lang' is protected and only accessible within class 'Coder' and its subclasses.
// sara.name = 'new' // Cannot assign to 'name' because it is a read-only property.