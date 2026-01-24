type Command = {
  execute: () => void
  undo: () => void
}

// Receiver
const createLight = () => {
  return {
    turnOn: () => console.log("Light is ON"),
    turnOff: () => console.log("Light is OFF")
  }
}

// Command creators (factory functions)
const createLightOnCommand = (light: ReturnType<typeof createLight>): Command => ({
  execute: () => light.turnOn(),
  undo: () => light.turnOff()
})

const createLightOffCommand = (light: ReturnType<typeof createLight>): Command => ({
  execute: () => light.turnOff(),
  undo: () => light.turnOn()
})

// Invoker
const createRemote = () => {
  const history: Command[] = []

  return {
    submit: (cmd: Command) => {
      cmd.execute()
      history.push(cmd)
    },
    undo: () => {
      const cmd = history.pop()
      cmd?.undo()
    }
  }
}

const light = createLight()
const remote = createRemote()

remote.submit(createLightOnCommand(light))
remote.submit(createLightOffCommand(light))

remote.undo() // Light ON
