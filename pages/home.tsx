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

import { useQuery } from '@apollo/client'
import { GET_ALL_STORIES } from '../apollo/client/queries'

const Home = () => {
  const { data, error, loading } = useQuery(GET_ALL_STORIES)

  console.log('stories-data', loading)
  return (
    <Layout>
      <Container maxW="container.lg" mt="20">
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Err {JSON.stringify(error)}</div>
          ) : (
            data &&
            data.stories.map((item, i) => (
              <Box key={i}>
                <Image src={item.image} alt="Segun Adebayo" />
                <Heading as="h4" size="md" mt="2">
                  {item.title}
                </Heading>
              </Box>
            ))
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Home
