class UserBad {
    private username: string
    private email: string
    private password: string

    constructor(username: string, email: string, password: string) {
        this.username = username
        this.email = email
        this.password = password
    }

    generateSlug(): string {
        return `slug-${this.username.trim().toLowerCase()}`
    }

    createUser(user: any) {
        // create user in db
    }

    sendWelcomeEmail(user: any) {
        // send email
    }

}
// Bad ^
// Rule of thumb
// If you say “AND” while describing a class → split it.

class User {
  constructor(
    private username: string,
    private email: string,
    private password: string
  ) {}

  generateSlug(): string {
    return `slug-${this.username.trim().toLowerCase()}`
  }

  getEmail(): string {
    return this.email
  }
}

class UserRepository {
    create(user: any) {}
}

class EmailService {
    sendWelcome(user: any) {}
}

class UserService {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService
  ) {}

  register(user: User): void {
    this.userRepo.create(user)
    this.emailService.sendWelcome(user.getEmail())
  }
}
