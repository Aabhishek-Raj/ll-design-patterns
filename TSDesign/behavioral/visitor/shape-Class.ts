interface Shape {
  accept(visitor: ShapeVisitor): void
}

class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor) {
    visitor.visitCircle(this)
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  accept(visitor: ShapeVisitor) {
    visitor.visitRectangle(this)
  }
}

// Visitor Interface 
interface ShapeVisitor {
  visitCircle(circle: Circle): void
  visitRectangle(rectangle: Rectangle): void
}

// Concrete visitors
// area calculator
class AreaVisitor implements ShapeVisitor {
  visitCircle(circle: Circle) {
    console.log("Area:", Math.PI * circle.radius ** 2)
  }

  visitRectangle(rectangle: Rectangle) {
    console.log("Area:", rectangle.width * rectangle.height)
  }
}

// drawing visitor 
class DrawVisitor implements ShapeVisitor {
  visitCircle(circle: Circle) {
    console.log(`Drawing a circle of radius ${circle.radius}`)
  }

  visitRectangle(rectangle: Rectangle) {
    console.log(`Drawing a rectangle ${rectangle.width}x${rectangle.height}`)
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 20)
]

const areaVisitor = new AreaVisitor()
const drawVisitor = new DrawVisitor()

shapes.forEach(s => s.accept(areaVisitor))
shapes.forEach(s => s.accept(drawVisitor))
