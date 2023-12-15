'use client'

import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ImageProvider } from '@/components/ImageContext'

export const metadata ={
  title: "Recylink",
  description: "A Digital platform that facilitates seamless reporting and resolution of waste management"
}

function App({ Component, pageProps }: AppProps) {
  return (
  <div>
    <ImageProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ImageProvider>
  </div>
  )
}

export default App;