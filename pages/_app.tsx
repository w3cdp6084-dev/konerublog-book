import '../src/styles/globals.css';
import "tailwindcss/tailwind.css";
import 'swiper/css/bundle'
import { Layout } from '../src/components/Layout';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp