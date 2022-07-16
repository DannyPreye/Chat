import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <Head>
        <title>BeeperChat</title>
        <link rel='icon' type='image/png' href='/beeperIcon.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}
export default MyApp

const EmptyLayout = ({ children }) => <>{children}</>
