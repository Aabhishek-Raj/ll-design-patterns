type Color = () => string

const red: Color = () => "Red"
const blue: Color = () => "Blue"

// “Bridge” — a function that creates shapes using a color
type Shape = {
  draw: () => void
}

// Circle factory
const createCircle = (color: Color): Shape => ({
  draw: () => console.log(`Drawing Circle in ${color()}`)
})

// Square factory
const createSquare = (color: Color): Shape => ({
  draw: () => console.log(`Drawing Square in ${color()}`)
})

const c1 = createCircle(red)
const s1 = createSquare(blue)

c1.draw()
s1.draw()

// Use it when you have two or more dimensions of variation.
