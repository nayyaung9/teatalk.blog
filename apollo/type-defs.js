import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    users: [User]!
  }
`
