import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import BlogsPage from './pages/BlogsPage';
import Register from "./components/AuthFolder/Register";
import SignInPage from './pages/SignInPage';
import ArticlesForm from "./components/BlogFolder/ArticlesForm";
import Article from "./components/BlogFolder/Article";
import { NavContext } from "../src/context/NavContext";
import ScrollToTop from './ScrollToTop';





function App() {

  const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/aboutus",
        title: "About Us",
    },
    {
        id: "/team",
        title: "Our Team",
    },
    {
        id: "/blog",
        title: "Blogs",
    },
    {
        id: "/createarticle",
        title: "Blog Admin",
    },
    {
        id: "/contactus",
        title: "Contact Us",
    },
    {
        id: "/signin",
        title: "Sign In",
    },
];
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const blogAdminUid = "gjSWaw1PnsZMfCntqQGDCSvErH93";
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
    <NavContext.Provider value={{ navLinks, active, setActive, toggle, setToggle, blogAdminUid }}>
      <BrowserRouter>
        <div className={`flex flex-col bg-primary relative`}>

          <div className={`w-full ${scrolled 
          ? "bg-primary fixed z-[3] duration-1000" 
          : "bg-transparent absolute z-[3] duration-1000"}`}>
            <Navbar />
          </div>

          <ScrollToTop/>

          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/team" element={<TeamPage />} exact />
            <Route path="/aboutus" element={<AboutUsPage />} exact />
            <Route path="/contactus" element={<ContactUsPage />} exact />
            <Route path="/blog" element={<BlogsPage />} exact />
            <Route path="/signup" element={<Register />} exact />
            <Route path="/signin" element={<SignInPage />} exact />
            <Route path="/createarticle" element={<ArticlesForm />} exact />
            <Route path="/article/:id" element={<Article />} exact />
          </Routes>

          <div className="w-full">
            <Footer />
          </div>

        </div>
      </BrowserRouter>
    </NavContext.Provider>
  )
}

export default App
