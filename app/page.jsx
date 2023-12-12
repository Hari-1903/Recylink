import Login from '@components/Login'

const Landingpage = () => {
  return (
    <div className='flex'>
      <div className="flex w-3/4 bg-[url('/assets/images/indian_flag.jpeg')] bg-cover">
        <p className='text-7xl font-bold uppercase'>recylink</p>
      </div>
      <Login/>
    </div>
  )
}

export default Landingpage;
