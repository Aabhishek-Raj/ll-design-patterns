

class Shape {
  type = "Shape";

  constructor(colour = "Transparent") {
    this.colour = colour;
    //  this.type = "Shape";
  }

  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(colour, sideLength = 2) {
    super(colour);
    // this.colour = colour;
    this.sideLength = sideLength;
    this.type = "Square";
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
console.log(square.area()); // 25
console.log(rectangle.area()); // 30
for (const shape of [square, rectangle]) shape.describe();
// A blue square
// A red rectangle