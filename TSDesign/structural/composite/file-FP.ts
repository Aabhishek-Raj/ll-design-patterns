type FileItem = {
  type: "file"
  name: string
  size: number
}

type Folder = {
  type: "folder"
  name: string
  items: FileSystemItem[]
}

type FileSystemItem = FileItem | Folder


// function for operations 
function getSize(item: FileSystemItem): number {
  if (item.type === "file") return item.size

  return item.items.reduce((sum, i) => sum + getSize(i), 0)
}

function show(item: FileSystemItem, indent = ""): void {
  if (item.type === "file") {
    console.log(`${indent}- ${item.name} (${item.size} KB)`)
    return
  }

  console.log(`${indent}+ ${item.name}`)
  item.items.forEach(i => show(i, indent + "  "))
}


const tree: FileSystemItem = {
  type: "folder",
  name: "root",
  items: [
    {
      type: "folder",
      name: "src",
      items: [
        { type: "file", name: "index.ts", size: 5 },
        { type: "file", name: "app.ts", size: 8 }
      ]
    },
    {
      type: "folder",
      name: "dist",
      items: [
        { type: "file", name: "bundle.js", size: 20 }
      ]
    }
  ]
}

show(tree)
console.log("Total Size:", getSize(tree), "KB")

