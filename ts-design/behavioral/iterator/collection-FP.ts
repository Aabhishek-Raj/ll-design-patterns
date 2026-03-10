//1. Iterator as a closure
const createIterator = <T>(items: T[]) => {
  let index = 0

  return {
    next: (): T | null => {
      if (index >= items.length) return null
      return items[index++] as T | null
    },

    hasNext: () => index < items.length,
  }
}

const iterator = createIterator([10, 20, 30])

while (iterator.hasNext()) {
  console.log(iterator.next())
}


//2. Generator Function
// The cleanest functional iterator in JS.
function* numberGenerator(nums: number[]) {
  for (const num of nums) {
    yield num
  }
}

const it = numberGenerator([10, 20, 30])

for (let value of it) {
  console.log(value)
}


