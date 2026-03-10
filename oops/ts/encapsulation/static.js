class Utils {
    static description = "A Utility Library"

    static capitalize(str) {
        return str.toUpperCase()
    }
}

class Library {
    static description = "A Utility Library"
    description = 'Another description' // this will work, as an instance

    static caps(str) {
        return str.toUpperCase()
    }

    lower(str) {
        return str.toLowerCase()
    }
}

const util = new Utils()

console.log(util.description) // undefined
console.log(Object.getOwnPropertyNames(util.__proto__)) // [ 'constructor' ]
console.log(Object.getOwnPropertyNames(Utils)) // 'capitalize', 'description'  will be here