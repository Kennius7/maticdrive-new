import { useState, useEffect } from "react";
import partnershipPics from "../assets/MicroSoftStartupsCelebrationBadgeLight.png";
import heroPics from "../assets/about-a.jpeg";

function PartnerShip() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.scrollY) };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
        <section className="w-full flex flex-col justify-around items-center overflow-hidden relative 
            md:h-[900px] sm:h-[600px] xs:h-[500px] h-[400px] bg-indigo-900/20">

            <div className="w-full absolute z-[1] md:bottom-[150%] sm:bottom-[200%] xs:bottom-[210%] 
                bottom-[250%] md:h-[1100px] sm:h-[900px] xs:h-[700px] h-[600px]">

                <img src={heroPics} alt="hero pics"
                className="w-full h-full object-cover opacity-10"
                style={{ transform: `translateY(${offsetY * 0.4}px)` }} />

            </div>

            <div className="w-full flex flex-col justify-center items-center absolute z-[2] 
                md:top-[5%] top-[10%] p-2">
                
                <div className="text-white flex flex-col justify-center items-center md:w-[80%] 
                    w-[95%] md:h-[200px] h-[100px] md:mb-0 mb-6">

                    <div className="font-poppins text-center tracking-wider md:text-[22px] sm:text-[20px] 
                        text-[15px] md:mb-8 mb-2">
                        Major Partners
                    </div>

                    <div className="font-poppins font-bold text-center md:text-[40px] sm:text-[32px] text-[24px] 
                        md:tracking-[1px] tracking-normal md:mb-8 mb-4">
                        Our Major partners
                    </div>

                </div>

                <div className="md:w-[80vw] md:h-[35vw] xs:w-[85vw] xs:h-[38vw] w-[92vw] h-[40vw]">
                    <img src={partnershipPics} alt="Microsoft-Partnership-Image" 
                        className="w-full h-full bg-cover"/>
                </div>

            </div>

        </section>
    )
}

export default PartnerShip

