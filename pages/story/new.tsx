import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import dynamic from 'next/dynamic'
import { Container, Input } from '@chakra-ui/react'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css' // ES6

const StoryNew = () => {
  const [content, setContent] = useState('')

  const handleChange = value => {
    setContent(value)
  }

  return (
    <Layout>
      <Container maxW="container.lg" mt="20" mb="20">
        <Input variant="unstyled" placeholder="Story Title" mb="10" />

        <ReactQuill
          value={content}
          onChange={handleChange}
          placeholder="Story Content"
        />
      </Container>
    </Layout>
  )
}

export default StoryNew
