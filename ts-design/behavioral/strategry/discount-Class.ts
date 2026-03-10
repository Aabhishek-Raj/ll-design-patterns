//Bad code
// Hard to add new strategies
// Breaks Open-Closed Principle
function calculate(discountType: any, price: any) {
  if (discountType === 'percentage') { }
  if (discountType === 'fixed') { }
  if (discountType === 'festival') { }
}


// Define a family of algorithms as classes and switch them at runtime

interface DiscountStrategy {
  apply(amount: number): number
}

// Concrete strategies 
class NoDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount
  }
}

class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  apply(amount: number): number {
    return amount - (amount * this.percent) / 100
  }
}

class FixedDiscount implements DiscountStrategy {
  constructor(private cut: number) {}
  apply(amount: number): number {
    return amount - this.cut
  }
}

// Context - the user of the strategy
class Cart {
  constructor(private strategy: DiscountStrategy) {}

  setStrategy(strategy: DiscountStrategy) {
    this.strategy = strategy
  }

  calculateTotal(amount: number): number {
    return this.strategy.apply(amount)
  }
}


const cart = new Cart(new NoDiscount())
console.log(cart.calculateTotal(1000)) // 1000

cart.setStrategy(new PercentageDiscount(10))
console.log(cart.calculateTotal(1000)) // 900

cart.setStrategy(new FixedDiscount(200))
console.log(cart.calculateTotal(1000)) // 800



// Remove if/else by using interchangeable algorithm objects