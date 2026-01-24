// Allows you to encapsulate an action as an object, making actions:
// undoable
//  queueable
// loggable
// schedulable

interface Command {
  execute(): void
  undo(): void
}

// Receiver
class Light {
  turnOn() {
    console.log("Light is ON")
  }

  turnOff() {
    console.log("Light is OFF")
  }
}

// Concrete Commands
class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn()
  }

  undo() {
    this.light.turnOff()
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff()
  }

  undo() {
    this.light.turnOn()
  }
}

// Invoker
// Invoker doesn’t know HOW the command works
class RemoteControl {
  private history: Command[] = []

  submit(command: Command) {
    command.execute()
    this.history.push(command)
  }

  undo() {
    const last = this.history.pop()
    last?.undo()
  }
}

const light = new Light()
const remote = new RemoteControl()

remote.submit(new LightOnCommand(light))
remote.submit(new LightOffCommand(light))

remote.undo() // Light back ON

