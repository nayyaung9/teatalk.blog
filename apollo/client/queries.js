import { gql } from '@apollo/client'

export const GET_ALL_STORIES = gql`
  query StoriesQuery {
    stories {
      title
      content
      userId
      uniqueId
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

export const STORY_BY_ID = gql`
  query storyById($storyId: [String]!) {
    storyById(uniqueId: $storyId) {
      title
      content
      uniqueId
    }
  }
`
