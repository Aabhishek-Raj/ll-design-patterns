// Context Factory
// A music player wrapped in a closure.
const createMusicPlayer = () => {
  let state: any = null

  return {
    setState: (newState: any) => {
      state = newState
    },
    play: () => state.play(),
    pause: () => state.pause(),
    stop: () => state.stop(),
  }
}

// PlayingState
const PlayingState = (player: ReturnType<typeof createMusicPlayer>) => ({
  play: () => console.log("Already playing!"),
  pause: () => {
    console.log("Pausing music...")
    player.setState(PausedState(player))
  },
  stop: () => {
    console.log("Stopping music...")
    player.setState(StoppedState(player))
  }
})

// PausedState
const PausedState = (player: ReturnType<typeof createMusicPlayer>) => ({
  play: () => {
    console.log("Resuming music...")
    player.setState(PlayingState(player))
  },
  pause: () => console.log("Already paused!"),
  stop: () => {
    console.log("Stopping music...")
    player.setState(StoppedState(player))
  }
})

// StoppedState
const StoppedState = (player: ReturnType<typeof createMusicPlayer>) => ({
  play: () => {
    console.log("Starting music...")
    player.setState(PlayingState(player))
  },
  pause: () => console.log("Cannot pause, already stopped."),
  stop: () => console.log("Already stopped.")
})

const player = createMusicPlayer()

player.setState(StoppedState(player))

player.play()
player.pause()
player.play()
player.stop()

