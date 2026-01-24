interface Handler {
  setNext(handler: Handler): Handler
  handle(request: any): void
}

// Abstract Handler (implements chaining logic)
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null

  setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler  // for chaining
  }

  handle(request: any): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request)
    }
  }
}

class AuthHandler extends AbstractHandler {
  handle(request: any): void {
    if (!request.user) {
      console.log("❌ User not authenticated")
      return
    }

    console.log("✔ Authenticated")
    super.handle(request)
  }
}

class RoleHandler extends AbstractHandler {
  handle(request: any): void {
    if (request.user.role !== "admin") {
      console.log("❌ Not an admin")
      return
    }

    console.log("✔ Admin role verified")
    super.handle(request)
  }
}

class DataValidator extends AbstractHandler {
  handle(request: any): void {
    if (!request.data) {
      console.log("❌ Missing data")
      return
    }

    console.log("✔ Data valid")
    super.handle(request)
  }
}


const auth = new AuthHandler()
const role = new RoleHandler()
const validator = new DataValidator()

auth.setNext(role).setNext(validator)


const request = {
  user: { name: "Saran", role: "admin" },
  data: { amount: 100 }
}

auth.handle(request)


// No handler knows the full chain → loosely coupled.

