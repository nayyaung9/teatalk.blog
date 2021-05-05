import { gql } from '@apollo/client'

export const GET_ALL_STORIES = gql`
  query StoriesQuery {
    stories {
      title
      content
      userId
    }
  }
`
export const VIEWER = gql`
  query ViewerQuery {
    viewer {
      _id
      username
    }
  }
`
