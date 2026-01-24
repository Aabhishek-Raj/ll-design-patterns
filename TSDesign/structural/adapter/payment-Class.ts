// Scenario:
// You have a payment gateway that your system expects:
interface _PaymentProcessor {
  pay(amount: number): void
}

// But a third-party API gives you a different interface:
class _RazorpayApi {
  makePayment(value: number) {
    console.log(`Paid ₹${value} using Razorpay API`)
  }
}

// These interfaces don’t match → need an adapter.

// Adaptee
class RazorpayApi {
  makePayment(value: number) {
    console.log(`Paid ₹${value} using Razorpay API`)
  }
}

// Target interface
interface PaymentProcessor {
  pay(amount: number): void
}

// Adapter
class RazorpayAdapter implements PaymentProcessor {
  constructor(private api: RazorpayApi) {}

  pay(amount: number): void {
    this.api.makePayment(amount)
  }
}

const razorpay = new RazorpayApi()
const payment: PaymentProcessor = new RazorpayAdapter(razorpay)

payment.pay(500) 
// Output: Paid ₹500 using Razorpay API

//  Result
// Your code continues using pay() while the adapter talks to Razorpay using makePayment()
//  without modifying Razorpay API, only adapter it