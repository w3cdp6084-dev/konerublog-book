import '../src/styles/globals.css'
// import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from '../src/components/Layout'
import 'ress'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
