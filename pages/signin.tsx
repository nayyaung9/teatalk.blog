import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from '@chakra-ui/react'
import { SIGN_IN } from '../apollo/client/mutations'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

interface UserData {
  email: string
  password: string
}

export default function SignIn() {
  const router = useRouter()

  const [state, setState] = useState<UserData | null>({
    email: '',
    password: ''
  })

  const [signIn, { error, loading }] = useMutation(SIGN_IN, {
    variables: state,
    onCompleted: data => {
      if (data.signIn.user) {
        router.push('/home')
      }
    }
  })

  const onFormSubmit = async e => {
    e.preventDefault()

    signIn()
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
             
              <Link href="/signup" color={'blue.500'}>Create new account</Link>
            </Stack>
            <Button
              isLoading={loading ? true : false}
              colorScheme={'blue'}
              variant={'solid'}
              onClick={onFormSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}
