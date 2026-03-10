
// Create Mediator
const createMediator = () => {
  const subscribers: Record<string, (msg: string, from: string) => void> = {}

  return {
    register: (name: string, handler: (msg: string, from: string) => void) => {
      subscribers[name] = handler
    },
    send: (from: string, msg: string) => {
      Object.entries(subscribers)
        .filter(([user]) => user !== from)
        .forEach(([user, handler]) => handler(msg, from))
    }
  }
}

// Create FP Users
const createUser = (name: string, mediator: ReturnType<typeof createMediator>) => {
  mediator.register(name, (msg, from) => {
    console.log(`${name} receives from ${from}: ${msg}`)
  })

  return {
    send: (msg: string) => mediator.send(name, msg)
  }
}

const mediator = createMediator()

const abhi = createUser("Abhi", mediator)
const john = createUser("John", mediator)

abhi.send("Hello John!")
john.send("Hey Abhi!")
