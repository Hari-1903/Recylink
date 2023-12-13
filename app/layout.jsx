import '@styles/globals.css';

export const metadata ={
    title: "Recylink",
    description: "A Digital platform that facilitates seamless reporting and resolution of waste management"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <body className='app'>
        {children}
      </body>
    </html>
  )
}

export default Rootlayout;
