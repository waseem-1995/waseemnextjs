import Nav from '@/components/Navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return(
<>
<ChakraProvider>
<Nav />
<Component {...pageProps} />
</ChakraProvider>
</>
  )
}
