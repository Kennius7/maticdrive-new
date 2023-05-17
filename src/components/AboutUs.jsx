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

        <div className="sm:flex hidden overflow-hidden justify-center items-center w-[50%] md:h-full h-[80%]">
          <img src={aboutUsPics} alt="aboutus pics" 
          className="w-full h-[800px] object-cover"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} 
          />
        </div>

        <div className="w-full sm:hidden flex items-center justify-center overflow-hidden xs:h-[400px] h-[220px]">
          <img src={aboutUsPics} alt="aboutus pics" 
            className="w-full xs:h-[500px] h-[500px] object-cover xs:-mt-[160px] -mt-[50px] opacity-90"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}  
          />
        </div>


        <div className="w-full overflow-hidden relative sm:w-[50%] sm:h-full xs:h-[660px] h-[680px]">
          <img src={avbg} alt="AV pics" className="w-full h-full opacity-20 object-cover" />
          <div className={`w-full flex flex-col justify-center absolute z-1 md:top-[3%] sm:top-[0] xs:top-[6%] 
          top-[1%] right-[0%]`}>
            {features.map((feature) => (
              <div key={feature.id} 
                  className={`flex flex-col justify-center items-center
                  ${feature.id !== feature.length - 1 ? "md:mb-2 sm:mb-3 mb-2" : "md:mb-0 sm:mb-0 mb-0"}`}
              >
                <div className="w-[280px] xxs:w-full xxs:p-1 p-0 flex flex-col justify-center items-center"> 
                  <div className="flex justify-start items-center w-[98%] h-[50px] rounded-[5px] bg-primary">
                    <img src={feature.icon} alt="star" 
                      className=" xs:w-[45px] xs:h-[45px] w-[35px] h-[35px]"
                    />
                    <h4 className="pl-2 font-poppins font-semibold text-white text-center 
                      xs:text-[17px] text-[15px]">{feature.title}</h4>
                  </div>
                  <hr className="w-[99%] border border-white bg-white" />
                  <p className="w-[100%] pl-1 pt-1 font-poppins font-normal text-white italic 
                    md:text-[15px] sm:text-[14px] xs:text-[15px] xxs:text-[14px] text-[13px] 
                    md:leading-[19px] sm:leading-[17px] xs:leading-[20px] xxs:leading-[18px] leading-[17px] 
                    newline">
                    {feature.content}
                  </p>
                </div>
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
        <p className={`md:max-w-[42%] sm:max-w-[52%] xs:max-w-[80%] max-w-[92%] text-white text-center 
        md:text-[24px] sm:text-[28px] xs:text-[23px] text-[18px] italic md:-mt-[80px] sm:-mt-[23%] 
        xs:-mt-[5%] mt-[2%] xs:leading-[35px] leading-[25px]`}>
          We create and embed AI powered autonomous navigation features
          set to make your AVs gallant and trustworthy automobile for African terrains
        </p>
      </div>

    </section>
  )
};

export default AboutUs;
