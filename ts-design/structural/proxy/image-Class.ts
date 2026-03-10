// The Proxy has the same interface as the real object — 
// so the client doesn't know if it’s talking to the real thing or the proxy.


// Imagine loading a large image file. You don’t want to load it until it’s actually needed.
// So we create a ProxyImage that loads the real image lazily.
interface Image {
  display(): void;
}

// Create the REAL object (heavy)
class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(`Loading image: ${this.filename}`);
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

// Create the PROXY
class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename); // lazy load
    }
    this.realImage.display();
  }
}


// client code 
const img = new ProxyImage("photo.png");

console.log("Image created...");
img.display(); // Loads + displays
img.display(); // Directly displays (already loaded)
