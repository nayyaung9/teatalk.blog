import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }
  type Story {
    title: String!
    content: String!
  }

  type Query {
    users: [User]!
    stories: [Story]!
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }
  input SignInInput {
    email: String!
    password: String!
  }
  input StoryInput {
    title: String!
    content: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }
  type StoryPayload {
    story: Story!
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    createStory(input: StoryInput!): StoryPayload!
  }
`
