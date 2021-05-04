import { gql } from '@apollo/client'

export const GET_ALL_STORIES = gql`
  query StoriesQuery {
    stories {
      title
      content
    }
  }
`
