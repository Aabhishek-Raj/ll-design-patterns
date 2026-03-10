// A decorator is just a function wrapping another function/object.
type Coffee = {
  cost: () => number
  description: () => string
}

const basicCoffee: Coffee = {
  cost: () => 50,
  description: () => "Basic Coffee"
}

// FP Decorators
const addMilk = (coffee: Coffee): Coffee => ({
  cost: () => coffee.cost() + 10,
  description: () => coffee.description() + ", Milk"
})

const addSugar = (coffee: Coffee): Coffee => ({
  cost: () => coffee.cost() + 5,
  description: () => coffee.description() + ", Sugar"
})

let myCoffee = basicCoffee

myCoffee = addMilk(myCoffee)
myCoffee = addSugar(myCoffee)

console.log(myCoffee.description())  // Basic Coffee, Milk, Sugar
console.log(myCoffee.cost())         // 65




// Real-world Use Cases
// Logging wrapper
function withLogging(fn: any) {
  return (...args: any) => {
    console.log("Calling function", args)
    return fn(...args)
  }
}

// Authentication middleware
function requireAuth(handler: any) {
  return (req: any) => {
    if (!req.user) throw new Error("Unauthorized")
    return handler(req)
  }
}

// Caching decorator
function memoize(fn: any) {
  const cache = {} as any
  return (x: any) => cache[x] ?? (cache[x] = fn(x))
}
