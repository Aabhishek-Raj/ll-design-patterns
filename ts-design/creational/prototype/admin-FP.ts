type UserProfile = {
  name: string
  theme: string
  permissions: string[]
}
// Prototype object
const adminPrototype: UserProfile = {
  name: 'Admin',
  theme: 'dark',
  permissions: ['read', 'write', 'delete']
}

// Clone function (factory via copy)
const cloneUser = (proto: UserProfile): UserProfile => ({
  ...proto,
  permissions: [...proto.permissions] // deep copy
})

const admin1 = cloneUser(adminPrototype)
admin1.name = 'Alice'

const admin2 = cloneUser(adminPrototype)
admin2.name = 'Bob'


// Cleaner FP version
const cloneWith =
  (overrides: Partial<UserProfile>) =>
  (proto: UserProfile): UserProfile => ({
    ...proto,
    ...overrides,
    permissions: [...proto.permissions]
  })

const admin3 = cloneWith({ name: 'Charlie' })(adminPrototype)
