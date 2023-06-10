import { useState, useEffect } from 'react';
import Articles from "../components/BlogFolder/Articles";
import heroPics from "../assets/about-a.jpeg";
import PageTitleBlog from '../components/PageTitleBlog';



function BlogsPage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.scrollY) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <section className={`w-full bg-primary`}>

      <div className={`w-full flex flex-col justify-center items-center overflow-hidden relative 
        md:h-[700px] sm:h-[700px] xs:h-[500px] h-[450px]`}>

        <img src={heroPics} alt="hero pics"
          className="w-full md:h-[900px] sm:h-[900px] xs:h-[800px] h-[500px] object-cover opacity-10"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />

        <PageTitleBlog/>

        <div className="w-full flex flex-col justify-center items-center absolute z-[1] 
          md:top-[35%] sm:top-[35%] xs:top-[30%] top-[35%]">
        
          <div className={`w-full font-poppins font-semibold text-white text-center 
            md:text-[40px] sm:text-[40px] xs:text-[28px] text-[18px] sm:mb-12 xs:mb-10 mb-8`}>
            Our Blog<span className="text-gradient"> SECTION</span>
          </div>

          <p className={`text-white text-center italic sm:max-w-[65%] xs:max-w-[75%] max-w-[85%] 
            sm:text-[25px] xs:text-[18px] text-[16px] sm:leading-[40px] xs:leading-[30px] leading-[22px]`}>
            Hello and welcome to our blog section!
            Here you can learn more about us and every other thing relating to Matic Drive.
            Please feel to peruse through our blogs and drop your comments as well, as that will
            be much welcome!
          </p>
          
        </div>

      </div>

      <div className="w-full">
        <Articles />
      </div>

    </section>
  )
}

export default BlogsPage