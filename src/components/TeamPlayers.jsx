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
import PageTitleTeam from "./PageTitleTeam";





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
  const handleScroll = () => { setOffsetY(window.scrollY) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className={`w-full`}>

      <div className={`w-full flex flex-col justify-center items-center relative overflow-hidden 
        sm:h-[700px] xs:h-[500px] h-[450px]`}>

        <img src={heroPics} alt="hero pics"
          className="w-full sm:h-[900px] xs:h-[800px] h-[500px] object-cover opacity-10"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />

        <PageTitleTeam/>

        <div className="w-full flex flex-col justify-center items-center absolute z-[1] 
          sm:top-[35%] xs:top-[30%] top-[35%]">

          <div className={`w-full font-poppins text-white text-center sm:text-[40px] xs:text-[28px] text-[18px] 
            font-semibold sm:mb-12 xs:mb-10 mb-8`}>
            Meet the MATIC<span className="text-gradient"> DRIVE</span> Team
          </div>

          <p className={`text-white text-center italic sm:max-w-[65%] xs:max-w-[75%] max-w-[85%] 
          sm:text-[25px] xs:text-[18px] text-[16px] sm:leading-[40px] xs:leading-[30px] leading-[22px]`}>
            An agile team experienced with machine learning and neural data AI systems production,
            development, deployment etc., we are poised and well equipped to capitalize on the nascent 
            African market for autonoumous vehicle technology.
          </p>

        </div>

      </div>

      <div className="w-full xs:pb-20 pb-8">

        <div className="flex flex-col justify-center items-center xs:mt-[7%] mt-[50px] xs:mb-[80px] mb-10">
        
          <div className="text-center text-white font-poppins font-semibold sm:text-[30px] xs:text-[25px] text-[19px] 
            xs:mb-[12px] mb-[20px]">
            Matic 
            <span className="text-gradient">Drive</span> Core Team
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <hr className="xs:w-[60%] w-[75%] mb-1 opacity-40"/>
            <hr className="xs:w-[50%] w-[65%] mb-1 opacity-40"/>
            <hr className="xs:w-[40%] w-[55%] mb-1 opacity-40"/>
            <hr className="xs:w-[30%] w-[45%] mb-1 opacity-40"/>
            <hr className="xs:w-[20%] w-[35%] mb-1 opacity-40"/>
          </div>

        </div>

        <div className="w-full flex flex-wrap justify-center items-center">
          {teamMembers.map((card) => (
            <div key={card.id} className="flex flex-col justify-center items-center md:w-[23%] md:h-[23%] 
              sm:w-[30%] sm:h-[30%] xs:w-[30%] xs:h-[30%] w-[47%] h-[47%] md:mb-6 sm:mb-8 xs:mb-6 mb-4 
              xs:mx-1 mx-0">

              <div className="relative md:w-[80%] md:h-[80%] w-[90%] h-[90%] flex justify-center items-center">

                <img src={card.img} alt={card.name} className="xs:w-[92%] xs:h-[92%] w-[90%] h-[90%] 
                  border-2 border-yellow-300 bg-center bg-cover rounded-[50%]" />

                <img src={logo} alt="logo" className="absolute z-1 md:top-[77%] md:right-[70%] top-[70%] right-[70%] md:w-[20%] md:h-[20%] xs:w-[25%] xs:h-[25%] w-[26%] h-[26%] 
                  border-2 border-yellow-300 border-opacity-10 bg-center bg-cover rounded-[50%]" />

              </div>

              <div className="w-full flex flex-col items-center text-center rounded-[10px] sm:mt-4 xs:mt-2 mt-1">

                <h4 className="font-poppins xs:font-bold font-semibold md:text-[16px] sm:text-[22px] 
                  xs:text-[16px] text-[13px] xs:w-[99%] w-[99%] xs:leading-[25px] text-white">
                  {card.name}
                </h4>

                <p className="font-poppins font-normal md:text-[13px] sm:text-[16px] xs:text-[13px] text-[10px] 
                  text-white">
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
