import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo />
      <Component {...pageProps} />{' '}
    </ChakraProvider>
  )
}

export default MyApp
