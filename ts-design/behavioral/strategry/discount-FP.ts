
// stratedy = function
type DiscountStrategy = (amount: number) => number

// Concrete strategies
const noDiscount: DiscountStrategy = amount => amount

const percentageDiscount = (percent: number): DiscountStrategy =>
  amount => amount - (amount * percent) / 100

const fixedDiscount = (cut: number): DiscountStrategy =>
  amount => amount - cut

// Context function
const calculateTotal = (strategy: DiscountStrategy) =>
  (amount: number) => strategy(amount)


console.log(calculateTotal(noDiscount)(1000))           // 1000
console.log(calculateTotal(percentageDiscount(10))(1000)) // 900
console.log(calculateTotal(fixedDiscount(200))(1000))     // 800


// Use higher-order functions to change behavior dynamically