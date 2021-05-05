import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Layout from '../../components/layout/Layout'
import { Container, Box, Heading } from '@chakra-ui/react'
import { STORY_BY_ID } from '../../apollo/client/queries'
import { useQuery } from '@apollo/client'

const StoryDetail = () => {
  const router = useRouter()
  const { storyId } = router.query

  const { data, loading, error } = useQuery(STORY_BY_ID, {
    variables: {
      storyId
    }
  })

  console.log('data', data)
  console.log('data id', data?.storyById)

  if ((error || !data?.storyById) && !loading) {
    return <div>Error</div>
  } else if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <meta name="content" description="LoL" />
      </Head>
      <Container maxW="container.md">
        <Box mt="3">
          <Heading>{data?.storyById.title}</Heading>

          <div dangerouslySetInnerHTML={{ __html: data?.storyById.content }} />
        </Box>
      </Container>
    </Layout>
  )
}

export default StoryDetail
