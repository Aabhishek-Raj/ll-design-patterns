// subsystem 
class TV {
  turnOn() { console.log("TV ON") }
  turnOff() { console.log("TV OFF") }
}

class SoundSystem {
  turnOn() { console.log("Sound System ON") }
  turnOff() { console.log("Sound System OFF") }
  setLevel(level: number) { console.log("Sound level:", level) }
}

class GamingConsole {
  start() { console.log("Console Started") }
  stop() { console.log("Console Stopped") }
}

// Facade
class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private sound: SoundSystem,
    private console: GamingConsole
  ) {}

  playGame() {
    console.log("Getting everything ready for gaming...")
    this.tv.turnOn()
    this.sound.turnOn()
    this.sound.setLevel(8)
    this.console.start()
  }

  stopGame() {
    console.log("Shutting down gaming setup...")
    this.console.stop()
    this.sound.turnOff()
    this.tv.turnOff()
  }
}

// Use the Facade
const home = new HomeTheaterFacade(
  new TV(),
  new SoundSystem(),
  new GamingConsole()
)

home.playGame()
// System turns on in correct order

home.stopGame()
// System shuts down cleanly

// Your code now calls one simple method, instead of dealing with multiple classes.

