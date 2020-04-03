import fs from 'fs'
import path from 'path'
import { ApolloServer, gql } from 'apollo-server'
import { resolvers } from './resolvers'

const typeDefs = fs.readFileSync(path.join(__dirname, '../graphql/schema.gql')).toString()
const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any,
})

server.listen().then(({ url }) => {
  console.log(typeDefs)
  console.log(`🚀  Server ready at ${url}`)
})
