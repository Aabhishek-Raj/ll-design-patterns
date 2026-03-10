
// Accumulate configuration immutably, then finalize.
type User = {
    id: string
    name: string
    email?: string
    age?: number
    address?: string
    phone?: string
}

type UserDraft = Partial<User>

const withId = (id: string) => (draft: UserDraft) => ({
    ...draft,
    id
})

const withName = (name: string) => (draft: UserDraft) => ({
    ...draft,
    name
})

const withAge = (age: number) => (draft: UserDraft): UserDraft => ({
    ...draft,
    age
})

const buildUser = (draft: UserDraft) => {
    if (!draft.name || !draft.id) {
        throw new Error('id and name are required')
    }
    return draft as User
}

const user = buildUser(
    withId('id1234')(withName('John')(withAge(24)({})))
)

console.log(user)

// pipe turns many small functions into one readable story.
const pipe =
  (...fns: Function[]) =>
  (value: any) =>
    fns.reduce((v, fn) => fn(v), value)

// function pipe(...fns: Function[]) {
//   return function (value: any) {
//     return fns.reduce(function (v, fn) {
//       return fn(v)
//     }, value)
//   }
// }

const pipedUser = pipe(
  withId('1'),
  withName('Abhishek'),
  withAge(24),
  buildUser
)({})

console.log(pipedUser)


