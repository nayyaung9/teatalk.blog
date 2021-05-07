import React from 'react'
import { useQuery } from '@apollo/client'
import { STORY_BY_PIN } from '../../apollo/client/queries'
import {
  SimpleGrid,
  Stack,
  Box,
  Text,
  Image,
  Avatar,
  useColorModeValue as mode
} from '@chakra-ui/react'
import AlertError from '../error/AlertError'

const PinPostList = () => {
  const { data, error, loading } = useQuery(STORY_BY_PIN, {
    variables: {
      isPin: false
    }
  })
  return (
    <React.Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <AlertError status="error" message="Application Error" />
      ) : (
        <Box
          as="section"
          maxW="5xl"
          mx="auto"
          py="12"
          px={{ base: '6', md: '8' }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX="10"
            spacingY={{ base: '8', md: '14' }}
          >
            {data &&
              data.storyByPin.map((item, i) => (
                <Stack
                  spacing={{ base: '3', md: '6' }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <Box fontSize="6xl">
                    <Image src="https://images.unsplash.com/photo-1620153874520-aabdacf78006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />
                  </Box>
                  <Stack spacing="1">
                    <Text fontWeight="extrabold" fontSize="lg">
                      Secure by default
                    </Text>
                    <Box color={mode('gray.600', 'gray.400')}>
                      {' '}
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus.
                    </Box>
                  </Stack>
                </Stack>
              ))}
          </SimpleGrid>
        </Box>
      )}
    </React.Fragment>
  )
}

export default PinPostList
