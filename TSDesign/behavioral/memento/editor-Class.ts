// Memento
class EditorMemento {
  constructor(public readonly content: string) {}
}

// Originator
class TextEditor {
  private content = ""

  type(words: string) {
    this.content += words
  }

  save(): EditorMemento {
    return new EditorMemento(this.content)
  }

  restore(memento: EditorMemento) {
    this.content = memento.content
  }

  getContent() {
    return this.content
  }
}

// Caretaker
class History {
  private stack: EditorMemento[] = []

  push(m: EditorMemento) {
    this.stack.push(m)
  }

  pop(): EditorMemento | undefined {
    return this.stack.pop()
  }
}

const editor = new TextEditor()
const history = new History()

editor.type("Hello ")
history.push(editor.save())

editor.type("World!")
history.push(editor.save())

console.log(editor.getContent())    // Hello World!

// UNDO
editor.restore(history.pop()!)
console.log(editor.getContent())    // Hello 

// UNDO AGAIN
editor.restore(history.pop()!)
console.log(editor.getContent())    // "" (empty)

