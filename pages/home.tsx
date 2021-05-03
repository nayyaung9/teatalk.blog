import React from 'react'
import Layout from '../components/layout/Layout'
import { Container, SimpleGrid, Box, Image, Heading } from '@chakra-ui/react'

const items = [
  {
    id: 1,
    title: 'Stop killings, Myanmar chief told on trip abroad',
    image:
      'https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/6926/production/_118181962_mediaitem118180377.jpg'
  },
  {
    id: 2,
    title: 'How Myanmar coup caused its healthcare to vanish',
    image:
      'https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/0125/production/_118139200_gettyimages-1230430385.jpg'
  },
  {
    id: 3,
    title: "Could sanctions on Myanmar's military ever work?",
    image:
      'https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/9F06/production/_117701704_gettyimages-1231751087.jpg'
  },
  {
    id: 4,
    title: "Twitter launches emoji for 'Milk Tea' activists",
    image:
      'https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/BAF2/production/_117885874_milktea.jpg'
  },
  {
    id: 5,
    title: 'New arrests in Myanmar as protests continue',
    image: 'https://ichef.bbci.co.uk/images/ic/1200x675/p09dw3f1.jpg'
  }
]
const Home = () => {
  return (
    <Layout>
      <Container maxW="container.lg" mt="20">
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          {items.map((item, i) => (
            <Box key={i}>
              <Image src={item.image} alt="Segun Adebayo" />
              <Heading as="h4" size="md" mt="2">
                {item.title}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Home
