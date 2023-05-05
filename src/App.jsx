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

      <div className={`w-full flex flex-col bg-primary relative`}>

        <div className={`${scrolled 
        ? "fixed z-[3] w-full duration-1000 bg-primary" 
        : "bg-transparent absolute z-[3] duration-1000 w-full"}`}>
          <Navbar />
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
