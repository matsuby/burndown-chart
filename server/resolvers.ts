import { MutationResolvers, QueryResolvers, Resolvers, User } from './generated/graphql-resolver-types'

const dummyUsers: User[] = [
  { id: '00000', name: '0' },
  { id: '00001', name: '1' },
  { id: '00002', name: '2' },
]

const Query: QueryResolvers = {
  async user(_, args) {
    return dummyUsers.find(user => user.id === args.id) || null
  },
  async users() {
    return dummyUsers
  },
}

const Mutation: MutationResolvers = {
  async addUser(_, args) {
    const user = {
      id: `${dummyUsers.length}`.padStart(5, '0'),
      name: args.name,
    }
    dummyUsers.push(user)
    return user
  },
  async deleteUser(_, args) {
    const index = dummyUsers.findIndex(user => user.id === args.id)
    const user = dummyUsers[index]
    dummyUsers.splice(index, 1)
    return user
  },
}

export const resolvers: Resolvers = {
  Query,
  Mutation,
}
