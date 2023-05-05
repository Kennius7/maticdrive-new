import people01 from "../assets/MaticEsther2.png";
import people02 from "../assets/MaticOsato.png";
import people03 from "../assets/MaticKenny.png";
import people04 from "../assets/MaticBrian.png";
import people05 from "../assets/MaticRachael.png";
import people06 from "../assets/MaticAzeez.png";
import people07 from "../assets/MaticAbdulmatin2.png";
import people08 from "../assets/MaticJudith.png";
import logo from "../assets/MaticIconSmall1.png";



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


  return (
    <section className={`flex-col w-full`}>

      <div className="w-full flex justify-center items-center flex-col sm:mb-20 mb-6 pt-40">
        <h2 className="text-white text-[35px] font-semibold">
          Meet the <br className="sm:hidden block" /> MATIC<span className="text-gradient">DRIVE</span> Team.
        </h2>
        <div className="flex justify-center items-center w-full mt-16">
          <p className={`text-center max-w-[600px] text-white text-[22px]`}>
            An agile team experienced with machine learning and neural data AI systems production,
            development, deployment etc, we are poised to capitalize on the nascent African market
            for autonoumous vehicle technology.
          </p>
        </div>
      </div>

      <div className="w-full pb-40">

        <div className="flex flex-wrap justify-center items-center">
          {teamMembers.map((card) => (
            <div key={card.id} className="m-2">
              <div className="flex flex-col justify-center items-center 
                    ss:w-[230px] ss:h-[230px] w-[120px] h-[120px] ss:m-2 p-2 m-2">
                <div className="">
                  <img src={card.img} alt={card.name} className="ss:w-[160px] ss:h-[160px] w-[100px] 
                  h-[100px] border-2 border-yellow-300 bg-center bg-cover rounded-[50%]" />
                  <img src={logo} alt="logo" className="ss:-mt-20 ss:mb-4 -mt-10 -ml-3 mb-1 ss:w-[40px] 
                  ss:h-[40px] w-[30px] h-[30px] border-2 border-yellow-300 border-opacity-10 bg-center 
                  bg-cover rounded-[50%]" />
                </div>

                <div className="flex flex-col items-center text-center rounded-[10px] ss:mt-2 sm:mt-8 
                mt-1 ss:max-w-[400px]">
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
            </div>
          ))}
        </div>

      </div>

    </section>
  )
};


export default TeamPlayers;
