import { useState, useEffect } from "react";
import maticdriveIcon from "../assets/MaticIconSmall1.png";
import heroPics from "../assets/about-a.jpeg";
import aboutPics2 from "../assets/image_5.jpg";
import avbg from "../assets/av2.jpg";
// import logo from "../assets/matic-circle-logo.png";
import aboutUsPics from "../assets/about3-lady.jpeg";
import PageTitleAbout from "./PageTitleAbout";



const features = [
  {
    id: 0,
    icon: maticdriveIcon,
    title: "WHO WE ARE",
    content:
      "At Matic Drive, we believe that the power of technology can transform the way we live, work, and move, and we are proud to be at the forefront of this change. \nWe are committed to building partnerships with government agencies, private companies, and local communities to promote the adoption of autonomous vehicles and pave the way for a brighter, more sustainable future for all Africans.",
  },
  {
    id: 1,
    icon: maticdriveIcon,
    title: "HOW MATIC DRIVE STARTED",
    content:
      "The idea to build an AI Technology largely fitted for the African unique environment was first conceived in February 2023. Matic Drive was born out of a deep need to mitigate the senseless loss of human lives and properties on transit, due to bad road structure, poor network and traffic systems. \nWe are taking giant strides to ensure that vehicles are built with the African terrain in mind, which will reduce the number of accidents that occur annually.",
  },
  {
    id: 2,
    icon: maticdriveIcon,
    title: "WHAT WE DO",
    content:
      "Our Goal is to build a robust AI technology suitable for the African environment, while ensuring safety and providing comfort. \nWe are set to create one of the largest African setups for AV production, built for the African terrain, with all mechanizations and IT software integrations underway, and the best teams available worldwide.",
  },
];

const AboutUs = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="w-full">

      <div className={`w-full flex flex-col justify-center items-center overflow-hidden relative 
        md:h-[700px] sm:h-[680px] xs:h-[500px] h-[450px]`}>

        <img src={heroPics} alt="hero pics"
          className="w-full md:h-[800px] xs:h-[700px] h-[550px] opacity-20 object-cover"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }} />

        <PageTitleAbout/>

        <div className="w-full flex flex-col justify-center items-center absolute z-[1] md:top-[35%] 
          sm:top-[35%] xs:top-[30%] top-[30%]">

          <div className={`w-full font-poppins text-white text-center font-semibold md:text-[40px] 
            sm:text-[40px] xs:text-[30px] text-[25px]`}>
            About MATIC<span className="text-gradient"> DRIVE</span>
          </div>

          <p className={`font-poppins text-white text-center italic md:mt-[60px] mt-[40px] 
            md:max-w-[600px] sm:max-w-[65%] xs:max-w-[70%] max-w-[80%]
            md:text-[25px] sm:text-[25px] xs:text-[18px] text-[15px] md:leading-[35px] sm:leading-[40px] 
            xs:leading-[30px] leading-[25px]`}>
            At Matic Drive, we believe in providing ease, comfort and integrity of service.
            Alongside, we believe in building infrastructure around transportation in Africa
            and taking it to the next level with our AVs.
          </p>

        </div>

      </div>


      <div className="flex sm:flex-row flex-col overflow-hidden sm:justify-between justify-start items-center 
        sm:h-[750px] xs:h-[1100px] h-[950px]">

        <div className="hidden sm:flex justify-center items-center overflow-hidden w-[49%] md:h-full h-[700px]">

          <img src={aboutUsPics} alt="aboutus pics" 
            className="w-full h-[900px] -mt-[200px] object-cover bg-center opacity-50"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }} />

        </div>

        <div className="sm:hidden w-full flex items-center justify-center overflow-hidden bg-blue-400
          xs:h-[400px] h-[300px]">

          <img src={aboutUsPics} alt="aboutus pics" 
            className="w-full xs:h-[500px] h-[450px] object-cover xs:-mt-[160px] -mt-[100px] opacity-90"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }} />

        </div>

        <div className="flex justify-center items-center overflow-hidden relative w-full sm:w-[49%] 
          sm:h-[700px] xs:h-[700px] h-[650px]">

          <img src={avbg} alt="AV pics" className="w-full h-full opacity-10 object-cover" />

          <div className={`w-full flex flex-col justify-center items-center absolute z-1 
            md:top-[3%] sm:top-[0] xs:top-[6%] top-[1%]`}>

            {features.map((feature) => (
              <div key={feature.id} 
                className={`flex flex-col justify-center items-center
                ${feature.id !== feature.length - 1 ? "md:mb-2 sm:mb-3 mb-2" : "md:mb-0 sm:mb-0 mb-0"}`}>

                <div className="flex flex-col justify-center items-center w-[98%] xxs:w-full xxs:p-1 p-0">

                  <div className="flex justify-start items-center w-[98%] sm:h-[40px] xs:h-[50px] h-[40px] 
                    rounded-[5px] bg-primary">
                    <img src={feature.icon} alt="star" 
                      className=" xs:w-[45px] xs:h-[45px] w-[35px] h-[35px]"
                    />
                    <h4 className="pl-2 font-poppins font-semibold text-white text-center 
                      xs:text-[17px] text-[15px]">{feature.title}</h4>
                  </div>
                  {/* <hr className="w-[99%] border border-white bg-white" /> */}

                  <p className="w-[95%] pl-1 pt-1 font-poppins font-normal text-white italic 
                    md:text-[20px] sm:text-[16px] xs:text-[15px] xxs:text-[13px] text-[12px] 
                    md:leading-[24px] sm:leading-[18px] xs:leading-[20px] xxs:leading-[18px] leading-[16px] 
                    newline">
                    {feature.content}
                  </p>

                </div>

              </div>
            ))}

          </div>
          
        </div>

      </div>

      <div className="w-full flex flex-col justify-center items-center overflow-hidden relative 
        md:h-[600px] sm:h-[400px] xs:h-[300px] h-[250px]">

        <img src={aboutPics2} alt="hero pics"
          className="w-full md:h-[800px] sm:h-[650px] xs:h-[600px] h-[500px] opacity-30 object-cover 
          md:-mt-[700px] sm:-mt-[450px] xs:-mt-[700px] -mt-[600px]"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }} />

        <p className={`font-poppins text-white text-center italic absolute z-[1] 
          sm:top-[40%] xs:top-[40%] top-[35%] 
          md:max-w-[42%] sm:max-w-[50%] xs:max-w-[70%] max-w-[75%]  
          md:text-[24px] sm:text-[24px] xs:text-[17px] text-[14px] 
          xs:leading-[30px] leading-[23px]`}>
          We create and embed AI powered autonomous navigation features
          set to make your AVs gallant and trustworthy automobile for African terrains
        </p>

      </div>

    </section>
  )
};

export default AboutUs;
