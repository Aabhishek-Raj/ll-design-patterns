
// Subject with closures
type Observer<T> = (data: T) => void;

const createSubject = <T>() => {
  const observers: Observer<T>[] = [];

  return {
    subscribe(observer: Observer<T>) {
      observers.push(observer);
    },
    unsubscribe(observer: Observer<T>) {
      const idx = observers.indexOf(observer);
      if (idx >= 0) observers.splice(idx, 1);
    },
    notify(data: T) {
      observers.forEach(observer => observer(data));
    }
  };
};

// Create subject (order events)
const orderSubject = createSubject<string>();

// Observers
const emailObserver: Observer<string> = order =>
  console.log("📧 Email:", order);

const inventoryObserver: Observer<string> = order =>
  console.log("📦 Inventory:", order);

const smsObserver: Observer<string> = order =>
  console.log("📱 SMS:", order);


orderSubject.subscribe(emailObserver);
orderSubject.subscribe(inventoryObserver);
orderSubject.subscribe(smsObserver);

//notify
orderSubject.notify("Order#456");

// Observers are just callback functions stored in an array.
