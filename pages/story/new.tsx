import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Container, Input, Button } from '@chakra-ui/react'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import { CREATE_STORY } from '../../apollo/client/mutations'
import { useMutation } from '@apollo/client'
import { VIEWER } from '../../apollo/client/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import 'react-quill/dist/quill.snow.css' // ES6
import PostAddLayout from '../../components/layout/PostAddLayout'

const StoryNew = () => {
  const { data, loading, error } = useQuery(VIEWER)
  const viewer = data?.viewer
  const router = useRouter()

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
    variables: state,
    onCompleted: data => {
      console.log('uploaded story', data)
      return router.push(`/story/${data.story.uniqueId}`)
    }
  })

  const onFormSubmit = async e => {
    e.preventDefault()
    createStory()
  }

  return (
    <PostAddLayout onFormSubmit={onFormSubmit}>
      <Input
        variant="unstyled"
        placeholder="Story Title"
        mb="10"
        mt="10"
        value={state.title}
        onChange={e => setState({ ...state, title: e.target.value })}
      />

      <ReactQuill
        value={state.content}
        onChange={handleChange}
        placeholder="Story Content"
      />
    </PostAddLayout>
  )
}

export default StoryNew
