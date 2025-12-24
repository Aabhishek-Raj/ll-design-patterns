// The problem (naive code)

// function handlePayment() {
//     if(type == 'upi') {
//         return upiPayment()
//     }
//     if(type == 'credit') {
//         return creditPayment()
//     }
// }

// const createPayment = (type: string) => {
//     handlePayment(type)
// }

//trail

type Payment = {
  pay: (amount: number) => void
}


const upiPayment = (): Payment => ({
  pay: amount => {
    console.log(`Paid ₹${amount} via UPI`)
  }
})

const cardPayment = (): Payment => ({
  pay: amount => {
    console.log(`Paid ₹${amount} via Card`)
  }
})

type PaymentFactory = () => Payment

const processPayment = (factory: PaymentFactory) => {
  return (amount: number) => {
    const payment = factory()
    payment.pay(amount)
  }
}

const payment = processPayment(upiPayment)
payment(450)
