import { useState, useEffect } from "react";
import heroPics from "../assets/about-a.jpeg";
import { Link } from "react-router-dom";




function HomePageContactUs() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.scrollY) };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <div className="relative w-full flex flex-col justify-center items-center">

        <div className="w-full md:h-[700px] sm:h-[600px] h-[500px] relative flex justify-end 
            items-center overflow-hidden">

            <div className="md:w-[900px] sm:w-[700px] xs:w-[550px] w-[400px] md:h-[450px] sm:h-[400px] h-[280px] flex justify-center 
                items-center overflow-hidden skew-x-[25deg] md:-mr-[120px] sm:-mr-[100px] xs:-mr-[70px] 
                -mr-[80px]">

                <div className="relative text-white overflow-hidden md:w-[1100px] md:h-[550px] 
                    w-[1100px] h-[550px] -skew-x-[25deg] -pr-[200px]">

                    <div className="absolute z-[1] md:w-[1200px] md:h-[650px] sm:w-[1000px] sm:h-[1000px] 
                        w-[1000px] h-[700px] md:bottom-[450%] sm:bottom-[390%] xs:bottom-[350%] bottom-[280%]">

                        <img src={heroPics} alt="hero pics"
                            className="w-full h-full object-cover opacity-40"
                            style={{ transform: `translateY(${offsetY * 0.6}px)` }}/>

                    </div>

                </div>

            </div>

        </div>

        <div className="absolute z-[2] w-full flex flex-col justify-center items-end 
            md:top-[40%] sm:top-[38%] xs:top-[32%] top-[35%]">

            <div className="md:w-full sm:w-[60%] xs:w-[65%] w-[78%] text-white font-semibold text-end 
                md:text-[30px] sm:text-[32px] xs:text-[24px] text-[18px] md:pr-4 pr-2">
                WANT TO PARTNER WITH US? <br className="md:block hidden"/> OR YOU WANT TO MAKE ENQUIRIES?
            </div>

            <div className="w-[50%] md:p-4 p-2 flex justify-end items-center md:mt-0 mt-6">

                <Link to="/contactus">
                    <button className="text-gray-800 md:text-center xs:text-center 
                        text-end font-bold italic rounded-[5px] bg-blue-gradient sm:text-[18px] text-[16px] 
                        sm:w-[200px] sm:h-[50px] w-[150px] h-[45px] md:pr-0 xs:pr-0 pr-2">
                        CONTACT US
                    </button>
                </Link>

            </div>

        </div>

    </div>
  )
}

export default HomePageContactUs