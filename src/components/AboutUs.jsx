import { useState, useEffect } from "react";
import star from "../assets/Star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";
import heroPics from "../assets/about-a.jpeg";



const features = [
  {
    id: "feature-1",
    icon: star,
    title: "WHO WE ARE",
    content:
      "At Matic Drive, we believe that the power of technology can transform the way we live, work, and move, and we are proud to be at the forefront of this change. \nWe are committed to building partnerships with government agencies, private companies, and local communities to promote the adoption of autonomous vehicles and pave the way for a brighter, more sustainable future for all Africans.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "HOW MATICDRIVE STARTED",
    content:
      "The idea to build an AI Technology largely fitted for the African unique environment was first conceived in February 2023. Matic Drive was born out of a deep need to mitigate the senseless loss of human lives and properties on transit, due to bad road structure, poor network and traffic systems. \nWe are taking giant strides to ensure that vehicles are built with the African terrain in mind, which will reduce the number of accidents that occur annually.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "WHAT WE DO",
    content:
      "Our Goal is to build a robust AI technology suitable for the African environment, while ensuring safety and providing comfort. \nWe are committed to building partnerships with government agencies, private companies, and local communities to promote the adoption of autonomous vehicles and pave the way for a brighter, more sustainable future for all Africans.",
  },
];

const [{ icon, title, content, index }] = features;


const FeatureCard = () => (
  <div className={`flex flex-col p-2 rounded-[5px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-transparent`}>
    <div className="flex justify-start items-center -mt-3 w-[100%] h-[50px] bg-transparent">
      <img src={icon} alt="star" className=" w-[50px] h-[50px]" />
      <h4 className="pl-2 font-poppins font-semibold text-white text-center ss:text-[18px] text-[16px]">{title}</h4>
    </div>
    <hr className="w-full border border-white bg-white" />
    <p className="mt-2 mx-4 ss:mx-0 -mx-0 font-poppins font-normal tracking-wide text-white text-[14px] leading-[20px] newline">
      {content}
    </p>
  </div>
);

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
          className="w-full h-[1000px] opacity-20"
          style={{ transform: `translateY(${offsetY * 0.7}px)` }} />

        <div className="-mt-[900px]">
          <div className={`w-full text-white text-center pt-40 text-[40px] font-semibold mb-12`}>
            About MATIC<span className="text-gradient">DRIVE</span>
          </div>
          <p className={`max-w-[650px] my-5 text-white text-center text-[22px] mb-40 leading-[40px]`}>
            At Maticdrive, we believe in providing ease, comfort and integrity of service.
            Alongside, we believe in building infrastructure around transportation in Africa
            and taking it to the next level with our AVs.
          </p>
        </div>

      </div>

      <div className={`flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

    </section>
  )
};

export default AboutUs;
