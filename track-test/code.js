// Immutable Update Drill
const users = [
  { id: 1, name: "A", skills: ["js"] },
  { id: 2, name: "B", skills: ["ts"] }
]

const newUser = users.map(user => {
    if(user.id === 2) {
       return {...user, skills: [...user.skills, "react"]}
    }
    return user
})

console.log(newUser)


// Event Loop Sanity Check

setTimeout(() => console.log("T"), 0)
Promise.resolve().then(() => console.log("P"))
console.log("S")

// Closure Reality Test
function counter() {
  let c = 0

  return {
    inc() {
        return ++c
    },
    dec() {
        return --c
    },
    reset() {
        c = 0
        return c
    }
  }
}

// Express Middleware
const middleware = (req, res, next) => {
    const userId = req.headers["userId"]

    if(!userId) {
        return res.status(401).json({ error: "x-user-id header missing" })
    }
    req.userId = userId
    next() 
}   

// In-Memory Rate Limiter
const ipStore = new Map()
const rateLimiter = (req, res, next) => {

    const ip = req.ip
    const now = Date.now()

    let timestamps = ipStore.get(ip)

    if(!timestamps) {
        timestamps = []
        ipStore.set(ip, timestamps)
    }

    console.log(ipStore, 's')
    while(timestamps.length && timestamps[0] <= now - 60000) {
        timestamps.shift()
    }

    if(timestamps.length >= 10) {
        return res.status(429).json({error: "Too many requests"})
    }

    timestamps.push(now)
    next()
}


// Async Failure Handling
// async function retry<T>(fn: () => Promise<T>,retries: number): Promise<T>
async function retry(fn, retries) {
  const baseDelay = 100
  let attempt = 0
  let lastError

  while (attempt < retries) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      attempt++

      if (attempt >= retries) break

      const delay = baseDelay * 2 ** (attempt - 1)
      await sleep(delay)
    }
  }

  throw lastError
}


function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}