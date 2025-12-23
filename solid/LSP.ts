class BirdBad {
  fly() {}
}

class PenguinB extends BirdBad {
  fly() {
    // penguin cann't fly
    throw new Error("Penguins can't fly");
  }
}
// This breaks LSP because:
function makeBirdFly(bird: BirdBad) {
  bird.fly(); // error
}

//If a child class says “I can’t do what my parent does” → design is wrong.

interface Bird {}

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly() {}
}

class Penguin implements Bird {
  swim() {}
}


