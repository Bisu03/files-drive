import Navbar from '../components/Navbar'
import ParentIdProvider from '../context/ParentIdContext';
import ShowContextProvider from '../context/SidebarContext';
import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return <ClerkProvider >
    <ShowContextProvider>
      <ParentIdProvider>
        <Navbar />
        <Toaster />
        <Component {...pageProps} />
      </ParentIdProvider>
    </ShowContextProvider>
  </ClerkProvider>
}

export default MyApp
