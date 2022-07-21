import '../styles/globals.css'
import Head from "next/head"

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
  return (
    <ChakraProvider>
      <Head>
        <title>BeeperChat</title>
        <link rel='icon' type='image/png' href='/beeperIcon.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ChakraProvider>
  )
}
export default MyApp

const EmptyLayout = ({ children }) => <>{children}</>
