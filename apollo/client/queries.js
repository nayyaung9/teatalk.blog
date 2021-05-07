import { gql } from '@apollo/client'

export const GET_ALL_STORIES = gql`
  query StoriesQuery {
    stories {
      title
      content
      userId {
        username
      }
      isPin
      createdAt
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
      userId {
        username
      }
    }
  }
`

export const STORY_BY_PIN = gql`
  query storyByPin($isPin: Boolean!) {
    storyByPin(sort: { isPin: $isPin }) {
      title
      content
      uniqueId
      userId {
        username
      }
      isPin
    }
  }
`
