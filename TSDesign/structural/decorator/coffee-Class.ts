// Add new behavior to an object without modifying its original class.
// It does this by wrapping the object with another object.

interface Coffee {
  cost(): number
  description(): string
}

class BasicCoffee implements Coffee {
  cost() { return 50 }
  description() { return "Basic Coffee" }
}


// Decorator Base Class
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number
  abstract description(): string
}

// Concrete Decorators
// add milk
class MilkDecorator extends CoffeeDecorator {
  cost() { return this.coffee.cost() + 10 }
  description() { return this.coffee.description() + ", Milk" }
}

// add sugar 
class SugarDecorator extends CoffeeDecorator {
  cost() { return this.coffee.cost() + 5 }
  description() { return this.coffee.description() + ", Sugar" }
}

let myCoffee: Coffee = new BasicCoffee()

myCoffee = new MilkDecorator(myCoffee)
myCoffee = new SugarDecorator(myCoffee)

console.log(myCoffee.description())  // Basic Coffee, Milk, Sugar
console.log(myCoffee.cost())         // 65
