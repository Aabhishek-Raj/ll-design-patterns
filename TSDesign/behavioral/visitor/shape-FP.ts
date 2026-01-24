// FP version doesn’t use accept().
// Instead, each shape has a type field and you "visit" using a visitor map.

type Circle = { type: "circle"; radius: number }
type Rectangle = { type: "rectangle"; width: number; height: number }

type Shape = Circle | Rectangle

// Define Visitor Function 
type ShapeVisitor<R> = {
  circle: (c: Circle) => R
  rectangle: (r: Rectangle) => R
}

// Visit Function (FP double dispatch)
function visit<R>(shape: Shape, visitor: ShapeVisitor<R>): R {
  return visitor[shape.type](shape as any)
}

// Create Concrete Visitors
const areaVisitor: ShapeVisitor<number> = {
  circle: c => Math.PI * c.radius ** 2,
  rectangle: r => r.width * r.height
}

const drawVisitor: ShapeVisitor<void> = {
  circle: c => console.log(`Drawing circle radius ${c.radius}`),
  rectangle: r => console.log(`Drawing rectangle ${r.width}x${r.height}`)
}
