// Factory Method can do this:
// createButton()
// createInput()
// this is not enough if you need different family eg: dark and light mode
// Who ensures they belong to the same family?

// ABSTRACT FACTORY
// Provide an interface for creating families of related objects,
// without specifying their concrete classes

interface Button {
    render(): void
}

interface Input {
    render(): void
}

class LightButton implements Button {
    render() {
        console.log('Light Button')
    }
}

class LightInput implements Input {
    render() {
        console.log('Light input')
    }
}

class DarkButton implements Button {
  render() {
    console.log('Dark Button')
  }
}

class DarkInput implements Input {
  render() {
    console.log('Dark Input')
  }
}
// Abstract Factory interface
// This factory guarantees:
// Button and Input come from same family
interface UIFactory {
  createButton(): Button
  createInput(): Input
}
// Concrete factories
class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton()
  }

  createInput(): Input {
    return new LightInput()
  }
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton()
  }

  createInput(): Input {
    return new DarkInput()
  }
}

// Client code (the magic)
class Application {
  constructor(private factory: UIFactory) {}

  render() {
    const button = this.factory.createButton()
    const input = this.factory.createInput()

    button.render()
    input.render()
  }
}

const factory = new DarkThemeFactory()
const app = new Application(factory)
app.render()

// One factory creates multiple compatible objects.




