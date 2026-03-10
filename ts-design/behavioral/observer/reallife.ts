// Observer Pattern in Real Life

//1. EventEmitter
// Node.js EventEmitter = Observer Pattern.
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("order", data => console.log("Email", data));
emitter.on("order", data => console.log("SMS", data));

emitter.emit("order", "Order#789");


// 2. RxJS (Angular / React)
subject.subscribe(value => console.log(value))


// 3. React useEffect
// useEffect(() => {
//   subscribe(listener);
//   return () => unsubscribe(listener);
// }, []);


// 4. Webhooks
// Stripe → sends event → many receivers.
