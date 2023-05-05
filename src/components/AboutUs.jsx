import { useState, useEffect } from "react";
import maticdriveIcon from "../assets/MaticIconSmall1.png";
import heroPics from "../assets/about-a.jpeg";
import avbg from "../assets/av2.jpg";
import logo from "../assets/matic-circle-logo.png";



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
      <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>

        <img src={heroPics} alt="hero pics"
          className="w-full h-[1000px] opacity-10"
          style={{ transform: `translateY(${offsetY * 0.7}px)` }} />

        <div className="-mt-[900px]">
          <div className={`w-full text-white text-center pt-40 text-[50px] font-semibold mb-12`}>
            About MATIC<span className="text-gradient">DRIVE</span>
          </div>
          <p className={`max-w-[650px] my-5 text-white text-center text-[22px] mb-40 leading-[40px]`}>
            At Maticdrive, we believe in providing ease, comfort and integrity of service.
            Alongside, we believe in building infrastructure around transportation in Africa
            and taking it to the next level with our AVs.
          </p>
        </div>

      </div>


      <div className="flex flex-row justify-around items-center py-10">

        <div className="w-[45%] h-[500px] flex justify-center items-center">
          <img src={logo} alt="man pics" className="w-[600px] h-[420px]" />
        </div>

        <div className="overflow-hidden h-[500px] w-[55%]">
          <img src={avbg} alt="AV pics" className="w-full h-full opacity-10" />
          <div className={`w-full flex-col -mt-[480px]`}>
            {features.map((feature) => (
              <div key={feature.id} className={`flex flex-col p-2 rounded-[5px] ${feature.id !== feature.length - 1 ? "mb-6" : "mb-0"} bg-transparent`}>
                <div className="flex justify-start items-center -mt-3 w-[100%] h-[50px] bg-transparent">
                  <img src={feature.icon} alt="star" className=" w-[50px] h-[50px]" />
                  <h4 className="pl-2 font-poppins font-semibold text-white text-center ss:text-[18px] text-[16px]">{feature.title}</h4>
                </div>
                <hr className="w-full border border-white bg-white" />
                <p className="mt-2 mx-4 ss:mx-0 -mx-0 font-poppins font-normal tracking-wide text-white text-[13px] leading-[15px] newline">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center w-full h-[400px] overflow-hidden">
        <img src={heroPics} alt="hero pics"
          className="w-full h-[500px] opacity-10 -mt-60"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} />
        <p className={`max-w-[650px] text-white text-center text-[25px] font-italics -mt-[100px] mb-40 leading-[40px]`}>
          We create and embed autonomous navigation features
          set to make you AV gallant and confident In African terrains
        </p>
      </div>


    </section>
  )
};

export default AboutUs;
