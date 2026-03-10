class Database {
    #token = 'jdfsklfjdf' // private 
    constructor() {
        this.#token = 'token2939393'
    }

    saveData(data) {
        this.#initDbCollection()
        this.#authorize()
        this.#updateQuery()
    }
    #initDbCollection() {}
    #authorize() {}
    #updateQuery() {}
}

const db = new Database()
console.log(db)
//console.log(db.#token) // '#token' is not accessible outside class 'Database' because it has a private identifier
console.log(Object.getOwnPropertyNames(db)) // [], token is private, instance have no other property
console.log(Object.getOwnPropertyNames(db.__proto__)) // [ 'constructor', 'saveData' ] other methods are private