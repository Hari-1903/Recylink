import '@styles/globals.css'

export const metadata ={
    title: "Recylink",
    description: "A Digital platform that facilitates seamless reporting and resolution of waste management"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <main className='app'>
        {children}
      </main>
    </html>
  )
}

export default Rootlayout;
