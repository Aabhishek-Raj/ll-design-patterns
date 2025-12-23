// Depend on abstractions, not concrete implementations

class MySQLDatabase {
  save(data: any) {}
}

class UserServicBad {
  private db = new MySQLDatabase();

  save(user: any) {
    this.db.save(user);
  }
}

// Easy to swap DB
// Easy to test (mock DB)

interface Database {
  save(data: any): void;
}

class MySQLDatabas implements Database {
  save(data: any) {}
}

class MongoDatabase implements Database {
  save(data: any) {}
}

class UserServic {
  constructor(private db: Database) {}

  save(user: any) {
    this.db.save(user);
  }
}

