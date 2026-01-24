// Adaptee
type RazorpayApi = {
  makePayment: (amount: number) => void
}

// Target Interface 
type PaymentProcessor = {
  pay: (amount: number) => void
}

// Adapter Function (FP style)
function createRazorpayAdapter(api: RazorpayApi): PaymentProcessor {
  return {
    pay: (amount) => api.makePayment(amount)
  }
}

// Usage
const razorpayApi: RazorpayApi = {
  makePayment(amount) {
    console.log("Razorpay FP Payment", amount)
  }
}

const payment = createRazorpayAdapter(razorpayApi)
payment.pay(200) // Razorpay FP Payment 200
