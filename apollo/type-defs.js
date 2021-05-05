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
    uniqueId: String!
    userId: ID
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
    userId: ID
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

  type Query {
    users: [User]!
    stories: [Story]!
    viewer: User
    storyById(uniqueId: [String]): Story!
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    createStory(input: StoryInput!): StoryPayload!
  }
`
