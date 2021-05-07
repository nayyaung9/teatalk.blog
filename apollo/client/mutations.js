import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        email
        password
      }
    }
  }
`

export const SIGN_UP = gql`
  mutation SignUpMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    signUp(input: { username: $username, email: $email, password: $password }) {
      user {
        username
        email
        password
      }
    }
  }
`

export const CREATE_STORY = gql`
  mutation CreateStoryMutation(
    $title: String!
    $content: String!
    $userId: ID!
  ) {
    createStory(input: { title: $title, content: $content, userId: $userId }) {
      story {
        title
        content
        userId 
      }
    }
  }
`
