import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <div className={`bg-primary w-full relative overflow-hidden`}>

      <div className={`bg-primary w-[100%] duration-1000 px-4 ${scrolled ? "flex fixed z-[12] justify-between w-full duration-1000" : ""} md:px-16 px-0 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className="bg-blue-700">
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
        <div className='text-white my-24'>
          Hello
        </div>
      </div>

      <div>
        <Footer/>
      </div>



    </div>

  )
}

export default App
