import { useState, useEffect } from "react";
import people01 from "../assets/MaticEsther2.png";
import people02 from "../assets/MaticOsato.png";
import people03 from "../assets/MaticKenny.png";
import people04 from "../assets/MaticBrian.png";
import people05 from "../assets/MaticRachael.png";
import people06 from "../assets/MaticAzeez.png";
import people07 from "../assets/MaticAbdulmatin2.png";
import people08 from "../assets/MaticJudith.png";
import logo from "../assets/MaticIconSmall1.png";
import heroPics from "../assets/about-a.jpeg";



// const [currentIndex, setCurrentIndex] = useState(0);


const TeamPlayers = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Esther Eruchie",
      title: "Founder",
      img: people01,
    },
    {
      id: 1,
      name: "Osato Ben-Iyare",
      title: "Project Mngr (Tech.)",
      img: people02,
    },
    {
      id: 2,
      name: "Kenny Ogbogu",
      title: "Lead Developer",
      img: people03,
    },
    {
      id: 3,
      name: "Brian Phiri",
      title: "Data Analyst",
      img: people04,
    },
    {
      id: 4,
      name: "Rachael Ugbomeh",
      title: "Product Manager",
      img: people05,
    },
    {
      id: 5,
      name: "Azeez Odekunle",
      title: "Lead Data Analyst",
      img: people06,
    },
    {
      id: 6,
      name: "Abdulmatin Lawal",
      title: "UI/UX Team Lead",
      img: people07,
    },
    {
      id: 7,
      name: "Judith Korodele",
      title: "Content Creator",
      img: people08,
    },
  ];

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className={`w-full`}>

      <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>

        <img src={heroPics} alt="hero pics"
          className="ss:h-[1000px] h-[450px] contain opacity-10"
          style={{ transform: `translateY(${offsetY * 0.7}px)` }}
        />

        <div className=" flex flex-col justify-center items-center ss:-mt-[800px] -mt-[350px] ss:mb-40 mb-10">
          <div className={`w-full font-poppins text-white text-center ss:text-[45px] text-[25px] 
            font-semibold ss:mb-12 mb-10 ss:tracking-normal tracking-[-1px]`}>
            Meet the MATIC<span className="text-gradient"> DRIVE</span> Team
          </div>
          <p className={`ss:max-w-[650px] max-w-[350px] text-white text-center ss:text-[22px] 
          text-[18px] ss:leading-[35px] leading-[30px] italic`}>
            An agile team experienced with machine learning and neural data AI systems production,
            development, deployment etc., we are poised and well equipped to capitalize on the nascent 
            African market for autonoumous vehicle technology.
          </p>
        </div>
      </div>

      <div className="w-full ss:pb-20 pb-8">
        <div className="flex flex-col justify-center items-center ss:mt-[80px] mt-[50px] ss:mb-[80px] mb-10">
          <div className="text-center text-white font-poppins font-semibold ss:text-[25px] text-[19px] 
            ss:mb-[12px] mb-[20px]">
            Matic <span className="text-gradient">Drive</span> Core Team
          </div>
          <hr className="ss:w-[40%] w-[75%] mb-1 opacity-40"/>
          <hr className="ss:w-[35%] w-[65%] mb-1 opacity-40"/>
          <hr className="ss:w-[30%] w-[55%] mb-1 opacity-40"/>
          <hr className="ss:w-[25%] w-[45%] mb-1 opacity-40"/>
          <hr className="ss:w-[20%] w-[35%] mb-1 opacity-40"/>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {teamMembers.map((card) => (
            <div key={card.id} className="ss:m-2 m-3 flex flex-col justify-center items-center 
            ss:w-[210px] ss:h-[210px] w-[120px] h-[120px]">
              <div className="">
                <img src={card.img} alt={card.name} className="ss:w-[155px] ss:h-[155px] w-[98px] 
                  h-[98px] border-2 border-yellow-300 bg-center bg-cover rounded-[50%]" />
                <img src={logo} alt="logo" className="ss:-mt-20 ss:mb-4 -mt-10 -ml-3 mb-1 ss:w-[40px] 
                  ss:h-[40px] w-[30px] h-[30px] border-2 border-yellow-300 border-opacity-10 bg-center 
                  bg-cover rounded-[50%]" />
              </div>

              <div className="flex flex-col items-center text-center rounded-[10px] ss:mt-2 sm:mt-8 
                mt-2 ss:max-w-[400px]">
                <h4 className="font-poppins ss:font-bold font-semibold ss:text-[16px] sm:text-[20px] 
                  ss:w-[400px] w-[150px] text-[12px] ss:leading-[25px] text-white">
                  {card.name}
                </h4>
                <p className="font-poppins font-normal ss:text-[12px] sm:text-[14px] text-[10px] 
                  ss:leading-[25px] text-white">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
};


export default TeamPlayers;
