import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import seoConfig from '../config/seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />{' '}
    </ChakraProvider>
  )
}

export default MyApp
