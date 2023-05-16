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
    <section className="w-full">
      <div className={`w-full flex flex-col justify-center items-center overflow-hidden sm:h-[600px] xs:h-[500px] 
      h-[450px]`}>
        <img src={heroPics} alt="hero pics"
          className="w-full xs:h-[700px] h-[600px] opacity-10 object-cover xs:-mt-[200px] -mt-[200px]"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }} 
        />

        <div className="xs:-mt-[600px] -mt-[550px]">
          <div className={`w-full font-poppins text-white text-center pt-40 md:text-[40px] sm:text-[50px] 
          xs:text-[40px] text-[30px] font-semibold xs:mb-6 mb-4`}>
            About MATIC<span className="text-gradient"> DRIVE</span>
          </div>
          <p className={`md:max-w-[600px] sm:max-w-[670px] xs:max-w-[450px] max-w-[300px] text-white text-center 
          md:text-[25px] sm:text-[35px] xs:text-[22px] text-[18px] md:leading-[30px] sm:leading-[40px] 
          xs:leading-[30px] leading-[25px] italic`}>
            At Matic Drive, we believe in providing ease, comfort and integrity of service.
            Alongside, we believe in building infrastructure around transportation in Africa
            and taking it to the next level with our AVs.
          </p>
        </div>
      </div>


      <div className="flex sm:flex-row flex-col sm:justify-between justify-around items-center sm:h-[600px]">

        <div className="sm:flex hidden overflow-hidden justify-center items-center w-[50%] h-full">
          <img src={aboutUsPics} alt="aboutus pics" 
          className="w-full h-[800px] object-cover"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} 
          />
        </div>

        <div className="w-full sm:hidden flex items-center justify-center overflow-hidden xs:h-[400px] h-[300px] 
        bg-blue-300">
          <img src={aboutUsPics} alt="aboutus pics" 
            className="w-full xs:h-[500px] h-[500px] object-cover xs:-mt-[160px] -mt-[50px] opacity-90"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}  
          />
        </div>


        <div className="w-full overflow-hidden sm:w-[50%] sm:h-full xs:h-[700px] h-[720px]">
          <img src={avbg} alt="AV pics" className="w-full h-full opacity-20 object-cover" />
          <div className={`w-full flex flex-col justify-center md:-mt-[600px] sm:-mt-[600px] xs:-mt-[690px] 
          -mt-[700px]`}>
            {features.map((feature) => (
              <div key={feature.id} 
                  className={`flex flex-col justify-center items-center
                  ${feature.id !== feature.length - 1 ? "md:mb-2 sm:mb-3 mb-6" : "md:mb-0 sm:mb-0 mb-0"}`}
              >
                <div className="flex justify-start items-center w-[98%] h-[50px] rounded-[5px] bg-primary2 xs:mt-0 mt-1">
                  <img src={feature.icon} alt="star" 
                    className=" xs:w-[45px] xs:h-[45px] w-[35px] h-[35px]"
                  />
                  <h4 className="pl-2 font-poppins font-semibold text-white text-center 
                    xs:text-[17px] text-[15px]">{feature.title}</h4>
                </div>
                <hr className="w-[98%] border border-white bg-white" />
                <p className="xs:my-2 my-1 xs:mx-4 mx-2 font-poppins font-normal text-white italic 
                xs:text-[15px] text-[14px] md:leading-[19px] sm:leading-[17px] xs:leading-[20px] leading-[18px] newline">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col items-center md:h-[400px] sm:h-[350px] xs:h-[300px] h-[250px] 
      overflow-hidden">
        <img src={heroPics} alt="hero pics"
          className="w-full sm:h-[600px] xs:h-[600px] h-[500px] opacity-20 md:-mt-[400px] sm:-mt-[300px] 
          xs:-mt-[500px] -mt-[450px] object-cover"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
        <p className={`md:max-w-[450px] sm:max-w-[550px] xs:max-w-[450px] max-w-[280px] text-white text-center 
        md:text-[24px] sm:text-[28px] xs:text-[23px] text-[18px] italic md:-mt-[80px] sm:-mt-[180px] 
        xs:-mt-[20px] mt-[30px] xs:leading-[35px] leading-[25px]`}>
          We create and embed AI powered autonomous navigation features
          set to make your AVs gallant and trustworthy automobile for African terrains
        </p>
      </div>

    </section>
  )
};

export default AboutUs;
