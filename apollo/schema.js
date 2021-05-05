import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './type-defs'
import { resolvers } from './revolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
