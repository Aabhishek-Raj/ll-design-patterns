// The problem (naive code)
function createPayment(type: string) {
  if (type === 'upi') {
    return new UpiPayment()
  }
  if (type === 'card') {
    return new CardPayment()
  }
}

// Product interface
interface Payment {
  pay: (amount: number) => void
}

//Concrete products
class UpiPayment implements Payment {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via UPI`)
  }
}

class CardPayment implements Payment {
  pay(amount: number) {
    console.log(`Paid $${amount} via Credit`)
  }
}

//Creator (Factory)
abstract class PaymentCreator {
  abstract createPayment(): Payment

   // business logic
  process(amount: number) {
    const payment = this.createPayment()
    payment.pay(amount)
  }
}
// createPayment() is the factory method
// process() uses it but does not know concrete classes

// Concrete creators
class UpiPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new UpiPayment()
  }
}

class CardPaymentCreator extends PaymentCreator {
  createPayment(): Payment {
    return new CardPayment()
  }
}

const creator = new UpiPaymentCreator()
creator.process(500)

