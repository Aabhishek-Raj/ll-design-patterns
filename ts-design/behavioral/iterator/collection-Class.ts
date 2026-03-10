// I want to loop through a collection
// without exposing its internal structure.

// for (item of myCollection) {
//   console.log(item)
// }
// …but the collection may not be an array.
// Iterator allows you to create a standard way to loop, no matter how the data is stored.


interface Iterator<T> {
  next(): T | null
  hasNext(): boolean
}


// Define Aggregate (collection)
interface Aggregate<T> {
  createIterator(): Iterator<T>
}

// concrete collection
class NumberCollection implements Aggregate<number> {
  private numbers: number[] = []

  add(num: number) {
    this.numbers.push(num)
  }

  createIterator(): Iterator<number> {
    return new NumberIterator(this.numbers)
  }
}

// Concrete Iterator
class NumberIterator implements Iterator<number> {
  private index = 0

  constructor(private numbers: number[]) {}

  next(): number | null {
    if (!this.hasNext()) return null
    return this.numbers[this.index++] as number
  }

  hasNext(): boolean {
    return this.index < this.numbers.length
  }
}

const collection = new NumberCollection()
collection.add(10)
collection.add(20)
collection.add(30)

const iterator = collection.createIterator()

while (iterator.hasNext()) {
  console.log(iterator.next())
}

// OOP Summary
// Encapsulates traversal logic inside iterator
// Collection and Iterator classes are separate
// Very useful in custom data structures like LinkedList, Tree, Graph