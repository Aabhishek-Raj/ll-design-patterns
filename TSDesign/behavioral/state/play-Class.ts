
// Instead of writing:
let state
if (state === "PLAYING") {  }
else if (state === "PAUSED") {  }
else if (state === "STOPPED") {  }
// You convert each state into a separate state object, making the code cleaner and more scalable.


// State pattern lets an object change its behavior when its internal state changes.
interface PlayerState {
  play(): void
  pause(): void
  stop(): void
}

// Context (the object whose behavior changes)
class MusicPlayer {
  constructor(private state: PlayerState) {}

  setState(state: PlayerState) {
    this.state = state
  }

  play() { this.state.play() }
  pause() { this.state.pause() }
  stop() { this.state.stop() }
}

// Concrete States
class PlayingState implements PlayerState {
  constructor(private player: MusicPlayer) {}

  play() {
    console.log("Already playing!")
  }

  pause() {
    console.log("Pausing music...")
    this.player.setState(new PausedState(this.player))
  }

  stop() {
    console.log("Stopping music...")
    this.player.setState(new StoppedState(this.player))
  }
}

// Paused state 
class PausedState implements PlayerState {
  constructor(private player: MusicPlayer) {}

  play() {
    console.log("Resuming music...")
    this.player.setState(new PlayingState(this.player))
  }

  pause() {
    console.log("Already paused!")
  }

  stop() {
    console.log("Stopping music...")
    this.player.setState(new StoppedState(this.player))
  }
}

// Stopped State
class StoppedState implements PlayerState {
  constructor(private player: MusicPlayer) {}

  play() {
    console.log("Starting music...")
    this.player.setState(new PlayingState(this.player))
  }

  pause() {
    console.log("Cannot pause, already stopped.")
  }

  stop() {
    console.log("Already stopped.")
  }
}

const player = new MusicPlayer(new StoppedState(null!))

// inject the player properly
player.setState(new StoppedState(player))

player.play()
player.pause()
player.play()
player.stop()


// Each state is a class.
// The context delegates behavior to the current state object.