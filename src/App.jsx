import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import TeamPage from './pages/TeamPage';
import { HashLoader } from 'react-spinners';


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loader, setLoader] = useState(false);
  const color = "blue";

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
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
    <div className="">
      {
        loader ? 
        <div className="flex justify-center items-center mt-[50vh]">
          <HashLoader
            color={color}
            loading={loader}
            // cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div> : 
        <div className={`bg-primary w-full relative overflow-hidden`}>
          <div className={`w-[100%] px-4 ${scrolled ? "flex fixed z-[12] justify-between w-full duration-1000 bg-primary" : "bg-transparent absolute z-[1] duration-1000"} md:px-16 px-0 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Navbar />
            </div>
          </div>

          <div className="relative">
            <Homepage />
          </div>

          <div className="relative">
            <TeamPage />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      }



    </div>

  )
}

export default App
