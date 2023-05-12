import { useState, useEffect } from "react";
import maticdriveIcon from "../assets/MaticIconSmall1.png";
import heroPics from "../assets/about-a.jpeg";
import avbg from "../assets/av2.jpg";
// import logo from "../assets/matic-circle-logo.png";
import aboutUsPics from "../assets/about3-lady.jpeg";



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
    title: "HOW MATICDRIVE STARTED",
    content:
      "The idea to build an AI Technology largely fitted for the African unique environment was first conceived in February 2023. Matic Drive was born out of a deep need to mitigate the senseless loss of human lives and properties on transit, due to bad road structure, poor network and traffic systems. \nWe are taking giant strides to ensure that vehicles are built with the African terrain in mind, which will reduce the number of accidents that occur annually.",
  },
  {
    id: 2,
    icon: maticdriveIcon,
    title: "WHAT WE DO",
    content:
      "Our Goal is to build a robust AI technology suitable for the African environment, while ensuring safety and providing comfort. \nWe are committed to building partnerships with government agencies, private companies, and local communities to promote the adoption of autonomous vehicles and pave the way for a brighter, more sustainable future for all Africans.",
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
    <section>
      <div className={`w-full flex flex-col justify-center items-center overflow-hidden ss:-mt-20`}>

        <img src={heroPics} alt="hero pics"
          className="w-full ss:h-[1000px] h-[500px] opacity-10"
          style={{ transform: `translateY(${offsetY * 0.7}px)` }} 
        />

        <div className="ss:-mt-[900px] -mt-[500px]">
          <div className={`w-full font-poppins text-white text-center pt-40 ss:text-[50px] text-[30px] 
          font-semibold ss:mb-12 mb-4`}>
            About MATIC<span className="text-gradient"> DRIVE</span>
          </div>
          <p className={`ss:max-w-[650px] max-w-[350px] my-5 text-white text-center ss:text-[22px] 
          text-[18px] mb-40 ss:leading-[40px] leading-[30px] italic`}>
            At Matic Drive, we believe in providing ease, comfort and integrity of service.
            Alongside, we believe in building infrastructure around transportation in Africa
            and taking it to the next level with our AVs.
          </p>
        </div>

      </div>


      <div className="flex ss:flex-row flex-col justify-around items-center py-10">

        <div className="ss:flex hidden overflow-hidden -mt-60 w-[45%] h-[700px] justify-center items-center">
          <img src={aboutUsPics} alt="aboutus pics" 
          className="w-[700px] h-[400px]"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} 
          />
        </div>

        <div className="ss:hidden flex w-full h-[270px] -mt-40 overflow-hidden justify-center items-center">
          <img src={aboutUsPics} alt="aboutus pics" 
            className="w-full h-[300px]"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}  
          />
        </div>

        <div className="overflow-hidden ss:h-[500px] h-[600px] ss:w-[55%] w-full">
          <img src={avbg} alt="AV pics" className="w-full h-full opacity-20" />
          <div className={`w-full flex-col ss:-mt-[480px] -mt-[550px]`}>
            {features.map((feature) => (
              <div key={feature.id} className={`flex flex-col ss:p-2 p-0 rounded-[5px] ${feature.id !== feature.length - 1 ? "mb-6" : "mb-0"} bg-transparent`}>
                <div className="flex justify-start items-center -mt-3 w-[100%] h-[50px] bg-transparent">
                  <img src={feature.icon} alt="star" className=" ss:w-[50px] ss:h-[50px] w-[35px] h-[35px]" />
                  <h4 className="pl-2 font-poppins font-semibold text-white text-center ss:text-[18px] text-[15px]">{feature.title}</h4>
                </div>
                <hr className="w-full border border-white bg-white" />
                <p className="ss:mt-2 mt-1 ss:mx-4 mx-2 font-poppins font-normal ss:tracking-wide 
                tracking-normal text-white italic ss:text-[13px] text-[13px] leading-[15px] newline">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center w-full ss:h-[500px] h-[300px] overflow-hidden">
        <img src={heroPics} alt="hero pics"
          className="w-full ss:h-[600px] h-[400px] opacity-20 ss:-mt-[400px] -mt-[380px]"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
        <p className={`max-w-[650px] text-white text-center ss:text-[25px] text-[18px] italic 
        ss:mt-[10px] mt-[80px] ss:mb-40 ss:leading-[40px] leading-[25px]`}>
          We create and embed AI powered autonomous navigation features
          set to make your AVs gallant and confident In African terrains
        </p>
      </div>

    </section>
  )
};

export default AboutUs;
