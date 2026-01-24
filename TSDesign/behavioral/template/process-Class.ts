// Template Method defines the skeleton of an algorithm in a base class, while allowing subclasses to override certain steps.

abstract class DataProcessor {
  // template method
  public execute() {
    this.read()
    this.process()
    this.save()
    this.log()
  }

  abstract read(): void
  abstract process(): void
  abstract save(): void

  log() {
    console.log("Process completed.")
  }
}


// Concrete Implementations
// CSV Processor
class CsvProcessor extends DataProcessor {
  read() {
    console.log("Reading CSV file...")
  }

  process() {
    console.log("Processing CSV data...")
  }

  save() {
    console.log("Saving CSV results...")
  }
}

// JSON Processor
class JsonProcessor extends DataProcessor {
  read() {
    console.log("Reading JSON file...")
  }

  process() {
    console.log("Processing JSON data...")
  }

  save() {
    console.log("Saving JSON results...")
  }
}

const csv = new CsvProcessor()
csv.execute()

const json = new JsonProcessor()
json.execute()

// Parent class controls the overall workflow.
// Child classes only fill in the details.