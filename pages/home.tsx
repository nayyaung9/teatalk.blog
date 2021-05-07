import React from 'react'
import Layout from '../components/layout/Layout'
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_ALL_STORIES } from '../apollo/client/queries'
import AlertError from '../components/error/AlertError'
import moment from 'moment'
import PinPostList from '../components/post/PinPostList'

const Home = () => {
  const { data, error, loading } = useQuery(GET_ALL_STORIES)
  return (
    <Layout>
      <Container maxW="container.lg" mt="10">
        {/* <PinPostList /> */}
        <SimpleGrid columns={[1, null, 3]} spacing="30px" mt="10">
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
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
              >
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  <Image
                    src="https://image.freepik.com/free-photo/aerial-view-man-using-computer-laptop-wooden-table_53876-24824.jpg"
                    layout={'fill'}
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
                </Box>

                <Box>
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
