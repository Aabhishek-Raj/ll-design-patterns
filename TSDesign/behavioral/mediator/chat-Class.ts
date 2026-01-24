// Chat Room where users send messages to each other through a central mediator.

// Mediator Interface
interface ChatMediator {
  sendMessage(msg: string, user: User): void
  addUser(user: User): void
}

// User Class (Colleague)
class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}

  send(msg: string) {
    console.log(`${this.name} sends: ${msg}`)
    this.mediator.sendMessage(msg, this)
  }

  receive(msg: string) {
    console.log(`${this.name} receives: ${msg}`)
  }
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }

  sendMessage(msg: string, sender: User): void {
    this.users
      .filter(u => u !== sender)
      .forEach(u => u.receive(msg))
  }
}


const chatRoom = new ChatRoom()

const saran = new User("Saran", chatRoom)
const john = new User("John", chatRoom)
const rita = new User("Rita", chatRoom)

chatRoom.addUser(saran)
chatRoom.addUser(john)
chatRoom.addUser(rita)

saran.send("Hello everyone!")
