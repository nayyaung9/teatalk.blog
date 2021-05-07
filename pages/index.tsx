import Layout from '../components/layout/Layout'
import { Container } from '@chakra-ui/react'
import Hero from '../components/hero/Hero'
import { useQuery } from '@apollo/client'
import { VIEWER } from '../apollo/client/queries'
import PostList from '../components/post/PostList'

export default function Home() {
  const { data, loading, error } = useQuery(VIEWER)
  const viewer = data?.viewer

  return (
    <Layout>
      {viewer === null && <Hero /> }
      <Container maxW="container.lg" mt="10">
        <PostList />
      </Container>
    </Layout>
  )
}
