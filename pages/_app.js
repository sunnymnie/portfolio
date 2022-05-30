// import '@styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@components/layouts/main"

function Website({ Component, pageProps, router }) {
  // return <Component {...pageProps} />
  return (<ChakraProvider>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
  )
}

export default Website
