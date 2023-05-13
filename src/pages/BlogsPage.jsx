import { useState, useEffect } from 'react';
import Articles from "../components/BlogFolder/Articles";
import heroPics from "../assets/about-a.jpeg";



function BlogsPage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <section className={`w-full bg-primary`}>
      <div className={`w-full`}>

        <div className={`w-full flex flex-col justify-center items-center 
          overflow-hidden`}>

          <img src={heroPics} alt="hero pics"
            className="ss:h-[1000px] h-[500px] contain opacity-10"
            style={{ transform: `translateY(${offsetY * 0.7}px)` }}
          />

          <div className="ss:-mt-[900px] -mt-[350px]">
            <div className={`w-full font-poppins text-white text-center ss:mt-20 ss:text-[50px] text-[30px] 
              font-semibold ss:mb-12 mb-2`}>
              Our Blog<span className="text-gradient"> SECTION</span>
            </div>
            <p className={`ss:max-w-[650px] max-w-[300px] my-5 text-white text-center ss:text-[22px] 
              text-[18px] ss:mb-40 mb-20 ss:leading-[40px] leading-[25px] italic`}>
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
        

      </div>
    </section>
  )
}

export default BlogsPage