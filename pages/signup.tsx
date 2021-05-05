import React, { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import { SIGN_UP } from '../apollo/client/mutations'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
interface UserData {
  username: string
  password: string
  email: string
}

export default function SignUp() {
  const router = useRouter()

  const [state, setState] = useState<UserData | null>({
    username: '',
    email: '',
    password: ''
  })

  const [signUp] = useMutation(SIGN_UP, {
    variables: state
  })

  const onFormSubmit = async e => {
    e.preventDefault()

    signUp()
  }

  return (
    <Layout>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up a new account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy tea talk <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={e => setState({ ...state, email: e.target.value })}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={state.username}
                  onChange={e =>
                    setState({ ...state, username: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={state.password}
                  onChange={e =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  onClick={onFormSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  )
}
