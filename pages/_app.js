import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

function MyApp({ Component, pageProps }) {
  return <ClerkProvider >
    <Navbar />
    <Component {...pageProps} />
  </ClerkProvider>
}

export default MyApp
