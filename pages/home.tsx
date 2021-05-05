import React from 'react'
import Layout from '../components/layout/Layout'
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_ALL_STORIES } from '../apollo/client/queries'
import AlertError from '../components/error/AlertError'

const Home = () => {
  const { data, error, loading } = useQuery(GET_ALL_STORIES)

  console.log('data', data);
  return (
    <Layout>
      <Container maxW="container.lg" mt="20">
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <AlertError status="error" message="Application Error" />
          ) : (
            data &&
            data.stories.map((item, i) => (
              <Box key={i}>
                {/* <Image src={item.image} alt="Segun Adebayo" /> */}
                <Link href={`/story/${item.uniqueId}`}>
                  <Heading as="h4" size="md" mt="2">
                    {item.title}
                  </Heading>
                </Link>
              </Box>
            ))
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Home
