class UserProfileB {
  constructor(
    public name: string,
    public theme: string,
    public permissions: string[]
  ) {}
}

const adminOne = new UserProfileB(
  'Admin',
  'dark',
  ['read', 'write', 'delete']
)

// Want another admin-like user
const adminTwo = new UserProfileB(
  'Admin2',
  'dark',
  ['read', 'write', 'delete']
)
// Not goot , rebuild every time ^

// Create new objects by cloning existing ones.
// Prototype interface
interface Prototype<T> {
  clone(): T
}
// Concrete prototype
class UserProfile implements Prototype<UserProfile> {
  constructor(
    public name: string,
    public theme: string,
    public permissions: string[]
  ) {}

  clone(): UserProfile {
    // Imp: deep copy where needed
    return new UserProfile(
      this.name,
      this.theme,
      [...this.permissions]
    )
  }
}

const adminPrototype = new UserProfile(
  'Admin',
  'dark',
  ['read', 'write', 'delete']
)

const admin1 = adminPrototype.clone()
admin1.name = 'Alice'

const admin2 = adminPrototype.clone()
admin2.name = 'Bob'

