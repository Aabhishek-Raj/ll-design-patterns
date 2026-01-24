//Bad
// Tightly coupled
//  Hard to maintain
// Impossible to add/remove behaviors easily
function placeOrder() {
//   sendEmail();
//   decreaseStock();
//   sendSms();
}

// Subject keeps a list of observers. 
// When state changes → notify all observers.

// Observer interface
interface Observer {
  update(data: any): void;
}

// Subject interface
interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(data: any): void;
}

// Concrete Subject
class OrderService implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }

  placeOrder(order: string) {
    console.log("Order Placed:", order);
    this.notify(order);
  }
}

// Concrete Observers
class EmailService implements Observer {
  update(order: string) {
    console.log(`📧 Email sent for order: ${order}`);
  }
}

class InventoryService implements Observer {
  update(order: string) {
    console.log(`📦 Inventory updated for: ${order}`);
  }
}

class SmsService implements Observer {
  update(order: string) {
    console.log(`📱 SMS sent for: ${order}`);
  }
}

const orderService = new OrderService()

orderService.subscribe(new EmailService())
orderService.subscribe(new InventoryService())
orderService.subscribe(new SmsService())

orderService.placeOrder("Order#123")

// Subject → notifies → many observers.





