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
    <div>
      <div className={`bg-primary`}>
        <div className={``}>

          <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>
            <img src={heroPics} alt="hero pics"
              className="w-full ss:h-[1000px] h-[500px] opacity-10"
              style={{ transform: `translateY(${offsetY * 0.7}px)` }}
            />

            <div className="ss:-mt-[900px] -mt-[500px]">
              <div className={`w-full font-poppins text-white text-center ss:mt-20 ss:text-[50px] text-[30px] 
              font-semibold ss:mb-12 mb-4`}>
                Our Blog<span className="text-gradient"> SECTION</span>
              </div>
              <p className={`ss:max-w-[650px] max-w-[350px] my-5 text-white text-center ss:text-[22px] 
              text-[18px] mb-40 ss:leading-[40px] leading-[30px] italic`}>
                Hello and welcome to our blog section!
                Here you can learn more about us and every other thing relating to Matic Drive.
                Please feel to peruse through our blogs and drop your comments as well, as that will
                be much welcome!
              </p>
            </div>
          </div>

          <Articles />

        </div>
      </div>
    </div>
  )
}

export default BlogsPage