const createPipeline = (...handlers: Array<(req: any) => any>) => {
  return (req: any) => {
    for (const handler of handlers) {
      const result = handler(req)
      if (!result) return   // stop pipeline on failure
    }
  }
}

const auth = (req: any) => {
  if (!req.user) return console.log("❌ Not authenticated")
  console.log("✔ Authenticated")
  return true
}

const role = (req: any) => {
  if (req.user.role !== "admin") return console.log("❌ Not admin")
  console.log("✔ Admin role verified")
  return true
}

const validateData = (req: any) => {
  if (!req.data) return console.log("❌ Missing data")
  console.log("✔ Data valid")
  return true
}

//Build pipeline
const pipeline = createPipeline(auth, role, validateData)

pipeline({
  user: { name: "Abhi", role: "admin" },
  data: { amount: 100 }
})
