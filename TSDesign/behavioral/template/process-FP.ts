// Template Function
const createProcessor = ({
  read,
  process,
  save,
  log = () => console.log("Process completed.")
}: {
  read: () => void
  process: () => void
  save: () => void
  log?: () => void
}) => {
  return {
    execute() {
      read()
      process()
      save()
      log()
    }
  }
}

// CSV Processor
const csvProcessor = createProcessor({
  read: () => console.log("Reading CSV..."),
  process: () => console.log("Processing CSV..."),
  save: () => console.log("Saving CSV...")
})

// JSON Processor
const jsonProcessor = createProcessor({
  read: () => console.log("Reading JSON..."),
  process: () => console.log("Processing JSON..."),
  save: () => console.log("Saving JSON...")
})


csvProcessor.execute()
jsonProcessor.execute()
