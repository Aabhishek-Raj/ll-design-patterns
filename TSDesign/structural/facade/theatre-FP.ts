// Subsystem 
const TV = {
  turnOn: () => console.log("TV ON"),
  turnOff: () => console.log("TV OFF")
}

const Sound = {
  turnOn: () => console.log("Sound System ON"),
  turnOff: () => console.log("Sound System OFF"),
  setLevel: (n: number) => console.log("Sound level:", n)
}

const Print = {
  start: () => console.log("Console Started"),
  stop: () => console.log("Console Stopped")
}

// Create Facade as a function
function createHomeTheaterFacade(tv: typeof TV, sound: typeof Sound, print: typeof Print) {
  return {
    playGame: () => {
      console.log("Starting game setup...")
      tv.turnOn()
      sound.turnOn()
      sound.setLevel(8)
      print.start()
    },
    stopGame: () => {
      console.log("Stopping game setup...")
      print.stop()
      sound.turnOff()
      tv.turnOff()
    }
  }
}

const home = createHomeTheaterFacade(TV, Sound, Print)

home.playGame()
home.stopGame()

