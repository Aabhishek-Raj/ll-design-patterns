interface FileSystemItem {
  getSize(): number
  show(indent?: string): void
}

// Leaf Class — File
class FileItem implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getSize() {
    return this.size
  }

  show(indent = "") {
    console.log(`${indent}- ${this.name} (${this.size} KB)`)
  }
}

// Composite Class — Folder
class Folder implements FileSystemItem {
  private items: FileSystemItem[] = []

  constructor(private name: string) {}

  add(item: FileSystemItem) {
    this.items.push(item)
  }

  getSize() {
    return this.items.reduce((sum, item) => sum + item.getSize(), 0)
  }

  show(indent = "") {
    console.log(`${indent}+ ${this.name}`)
    this.items.forEach(item => item.show(indent + "  "))
  }
}


const root = new Folder("root")
const src = new Folder("src")
const dist = new Folder("dist")

const file1 = new FileItem("index.ts", 5)
const file2 = new FileItem("app.ts", 8)
const file3 = new FileItem("bundle.js", 20)

src.add(file1)
src.add(file2)
dist.add(file3)

root.add(src)
root.add(dist)

root.show()
console.log("Total Size:", root.getSize(), "KB")


// You treat folders and files as the same type → powerful recursive structure.