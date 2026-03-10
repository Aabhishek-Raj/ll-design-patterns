// Implementor: Color interface 
interface Color {
  applyColor(): string
}

class Red implements Color {
  applyColor() { return "Red" }
}

class Blue implements Color {
  applyColor() { return "Blue" }
}

// Abstraction: Shape
abstract class Shape {
  constructor(protected color: Color) {}

  abstract draw(): void
}

// Refined Abstractions (Shapes)
class Circle extends Shape {
  draw() {
    console.log(`Drawing Circle in ${this.color.applyColor()}`)
  }
}

class Square extends Shape {
  draw() {
    console.log(`Drawing Square in ${this.color.applyColor()}`)
  }
}


const redCircle = new Circle(new Red())
redCircle.draw() // Drawing Circle in Red

const blueSquare = new Square(new Blue())
blueSquare.draw() // Drawing Square in Blue
