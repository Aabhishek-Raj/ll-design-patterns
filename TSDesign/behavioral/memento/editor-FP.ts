type EditorState = {
  content: string
}

function typeText(state: EditorState, text: string): EditorState {
  return { ...state, content: state.content + text }
}

// Mementos = previous states
type Memento = EditorState

function save(state: EditorState): Memento {
  return { ...state }
}

function restore(_: EditorState, memento: Memento): EditorState {
  return { ...memento }
}

// Caretaker
class History {
  private stack: Memento[] = []

  push(m: Memento) {
    this.stack.push(m)
  }

  pop(): Memento | undefined {
    return this.stack.pop()
  }
}


let state: EditorState = { content: "" }
const history = new History()

state = typeText(state, "Hello ")
history.push(save(state))

state = typeText(state, "World!")
history.push(save(state))

console.log(state.content) // Hello World!

// undo
state = restore(state, history.pop()!)
console.log(state.content) // Hello 

// undo again
state = restore(state, history.pop()!)
console.log(state.content) // ""
