// The issue (constructor hell)
class UserB {
    constructor(
        public id: string,
        public name: string,
        public email?: string,
        public age?: number,
        public address?: string,
        public phone?: string
    ) { }
}

const userB = new UserB(
    '1',
    'Abhishek',
    undefined,
    24,
    'India',
    '9999999999'
)

// Construct a complex object step by step,
// while keeping the construction readable
class User {
    constructor(
        public id: string,
        public name: string,
        public email?: string,
        public age?: number,
        public address?: string,
        public phone?: string
    ) { }
}

class UserBuilder {

    private id!: string
    private name!: string
    private email?: string
    private age?: number
    private address?: string
    private phone?: string

    setId(id: string) {
        this.id = id
        return this
    }

    setName(name: string) {
        this.name = name
        return this
    }

    setEmail(email: string) {
        this.email = email
        return this
    }

    setAge(age: number) {
        this.age = age
        return this
    }

    setAddress(address: string) {
        this.address = address
        return this
    }

    setPhone(phone: string) {
        this.phone = phone
        return this
    }

    build(): User {
        return new User(
            this.id,
            this.name,
            this.email,
            this.age,
            this.address,
            this.phone
        )
    }

}

const user = new UserBuilder()
    .setId('1')
    .setName('John Doe')
    .setAge(24)
    .setAddress('India')
    .build()


console.log(user)

// Build an object step by step with readable intent.

