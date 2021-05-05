import React from 'react'
import Layout from '../components/layout/Layout'
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Badge,
  Avatar
} from '@chakra-ui/react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_ALL_STORIES } from '../apollo/client/queries'
import AlertError from '../components/error/AlertError'
import moment from 'moment';

const Home = () => {
  const { data, error, loading } = useQuery(GET_ALL_STORIES)
  console.log('data', data);
  return (
    <Layout>
      <Container maxW="container.lg" mt="20">
        <SimpleGrid columns={[1, null, 3]} spacing="30px">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <AlertError status="error" message="Application Error" />
          ) : (
            data &&
            data.stories.map((item, i) => (
              <Box
                key={i}
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <div style={{ position: 'relative' }}>
                  <Image
                    src="https://image.freepik.com/free-photo/aerial-view-man-using-computer-laptop-wooden-table_53876-24824.jpg"
                    alt="Segun Adebayo"
                  />
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      border: '4px solid #fff'
                    }}
                  />
                </div>

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Box as="span" color="gray.600" fontSize="sm">
                      {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Link href={`/story/${item.uniqueId}`}>{item.title}</Link>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Home
