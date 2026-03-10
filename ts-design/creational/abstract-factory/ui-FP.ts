
type Button = {
  render: () => void
}

type Input = {
    render: () => void
}


const lightButton = (): Button => ({
  render: () => console.log('Light Button')
})

const lightInput = (): Input => ({
  render: () => console.log('Light Input')
})

const darkButton = (): Button => ({
  render: () => console.log('Dark Button')
})

const darkInput = (): Input => ({
  render: () => console.log('Dark Input')
})

// Abstract Factory type
type UIFactory = {
  createButton: () => Button
  createInput: () => Input
}
// Concrete factories
const lightThemeFactory: UIFactory = {
  createButton: lightButton,
  createInput: lightInput
}

const darkThemeFactory: UIFactory = {
  createButton: darkButton,
  createInput: darkInput
}
// Compatibility guaranteed by object grouping^

// Client logic
const renderApp = (factory: UIFactory) => {
  const button = factory.createButton()
  const input = factory.createInput()

  button.render()
  input.render()
}

renderApp(darkThemeFactory)

// Group related creation functions into one object.
