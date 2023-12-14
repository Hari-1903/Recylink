import '@styles/globals.css';
import { ImageProvider } from '@/components/ReviewTicket'
import { ChakraProvider } from '@chakra-ui/react';


export const metadata ={
    title: "Recylink",
    description: "A Digital platform that facilitates seamless reporting and resolution of waste management"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <ImageProvider>
        <ChakraProvider>
      <body className='app'>
        {children}
      </body>
      </ChakraProvider>
      </ImageProvider>
      
    </html>
  )
}

export default Rootlayout;
