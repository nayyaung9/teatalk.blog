import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import seoConfig from '../config/seo'
import '../styles/global.css'
import '../styles/posts.css';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />{' '}
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
