import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';


// import { HashLoader } from 'react-spinners';



function App() {
  const [scrolled, setScrolled] = useState(false);
  // const [loader, setLoader] = useState(false);



  useEffect(() => {
    // setLoader(true);
    // setTimeout(() => {
    //   setLoader(false);
    // }, 3000);
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
    <BrowserRouter>

      <div className={`bg-primary relative`}>

        <div className={`w-[100%] px-4 ${scrolled ?
          "flex fixed z-[3] justify-between w-full duration-1000 bg-primary" :
          "bg-transparent absolute z-[3] duration-1000"} 
            md:px-16 px-0 flex justify-center items-center`}>
          <div className={`w-full`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/team" element={<TeamPage />} exact />
          <Route path="/aboutus" element={<AboutUsPage />} exact />
        </Routes>

        <div>
          <Footer />
        </div>

      </div>

    </BrowserRouter>


  )
}

export default App
