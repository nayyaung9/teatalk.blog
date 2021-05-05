import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/Layout'
import { Container, Box, Heading } from '@chakra-ui/react'
import { STORY_BY_ID } from '../../apollo/client/queries'
import { useQuery } from '@apollo/client'
import readingTime from 'reading-time';

const StoryDetail = () => {
  const router = useRouter()
  const { storyId } = router.query

  const { data, loading, error } = useQuery(STORY_BY_ID, {
    variables: {
      storyId
    }
  })

  if ((error || !data?.storyById) && !loading) {
    return <div>Error</div>
  } else if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  const timeToRead = readingTime(data?.storyById.content);

  return (
    <Layout>
      <img
        src="https://images.unsplash.com/photo-1620111991662-77d10cbb7b91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
        style={{ width: '100%' }}
      />
      <Container maxW="container.md">
        <Box mt="3">
          <Heading mb="4">{data?.storyById.title}</Heading>
          {timeToRead.text}
          <div dangerouslySetInnerHTML={{ __html: data?.storyById.content }} />
        </Box>
      </Container>
    </Layout>
  )
}

export default StoryDetail
