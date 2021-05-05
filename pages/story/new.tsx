import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import dynamic from 'next/dynamic'
import { Container, Input, Button } from '@chakra-ui/react'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import { CREATE_STORY } from '../../apollo/client/mutations'
import { useMutation } from '@apollo/client'
import { VIEWER } from '../../apollo/client/queries'
import { useQuery } from '@apollo/client'

import 'react-quill/dist/quill.snow.css' // ES6

const StoryNew = () => {
  const { data, loading, error } = useQuery(VIEWER)
  const viewer = data?.viewer

  const [state, setState] = useState({
    title: '',
    content: '',
    userId: ''
  })

  useEffect(() => {
    setState({ ...state, userId: viewer?._id })
  }, [viewer])

  const handleChange = value => {
    setState({ ...state, content: value })
  }
  
  const [createStory] = useMutation(CREATE_STORY, {
    variables: state
  })

  const onFormSubmit = async e => {
    e.preventDefault()
    createStory()
  }

  return (
    <Layout>
      <Container maxW="container.lg" mt="20" mb="20">
        <Input
          variant="unstyled"
          placeholder="Story Title"
          mb="10"
          value={state.title}
          onChange={e => setState({ ...state, title: e.target.value })}
        />

        <ReactQuill
          value={state.content}
          onChange={handleChange}
          placeholder="Story Content"
        />

        <Button type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </Container>
    </Layout>
  )
}

export default StoryNew
