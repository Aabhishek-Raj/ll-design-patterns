class PaymentServiceBad {
  pay(type: "upi" | "card", amount: number) {
    if (type === "upi") {
      // Upi payment
    }
    if (type === "card") {
      // Card payment
    }
  }
}

//Polymorphism
interface PaymentMethod {
  pay(amount: number): void;
}

class UpiPayment implements PaymentMethod {
  pay(amount: number) {}
}

class CardPayment implements PaymentMethod {
  pay(amount: number) {}
}

class PaymentService {
  constructor(private payment: PaymentMethod) {}

  process(amount: number) {
    this.payment.pay(amount);
  }
}

//Adding CryptoPayment or else → just create new class ^

//another example:

type AccountType = "Admin" | "Employee" | "Manager" | "HR"

class Account {
    private name!: string
    private email!: string
    private password!: string

    private accountType: AccountType = "Employee"

    getAccountType(): AccountType {
      return this.accountType
    }
    
    // bad way
    // isAdmin() {}
    // isManager() {}
}

const Roles: Record<AccountType, string> = {
  "Admin": '/dashboard',
  "Employee": '/',
  "Manager": "employee-list",
  "HR": "/salaries"
}

class RoleService {
  getRoles(account: Account): string {
    return Roles[account.getAccountType()]
  }
}