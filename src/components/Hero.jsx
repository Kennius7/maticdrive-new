import heroPics from "../assets/about-a.jpeg";
import { useState, useEffect } from "react";



function Hero() {
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

            <div className="w-full flex flex-col justify-center items-center overflow-hidden relative 
                md:h-[900px] sm:h-[800px] xs:h-[650px] h-[480px]">

                <img src={heroPics} alt="hero pics"
                    className="w-full md:h-[1000px] sm:h-[900px] xs:h-[700px] h-[600px] opacity-20 object-cover 
                    -mt-[40%]"
                    style={{ transform: `translateY(${offsetY * 0.4}px)` }}/>

                <div className={`w-full flex flex-col justify-center items-center absolute z-[1] 
                    md:top-[20%] sm:top-[15%] xs:top-[20%] top-[18%]`}>

                    <div className="w-full flex flex-row justify-center items-center">

                        <h1 className="font-poppins font-semibold sm:text-[40px] xs:text-[35px] text-[20px] 
                            text-white sm:leading-[65px] xs:leading-[48px] leading-[32px] text-center">
                            Introducing 
                            <br/> 
                            <span className="sm:text-[45px] xs:text-[38px] text-[22px]">The Next Generation</span>
                            <br />
                            <span className="text-gradient sm:text-[58px] xs:text-[44px] text-[25px] 
                            xs:tracking-normal tracking-[-1px]">Autonomous Vehicles</span>
                            <br />
                            <span className="font-poppins font-semibold sm:text-[60px] xs:text-[44px] 
                            text-[28px] xs:tracking-normal tracking-[-1px]">For Africa</span>
                        </h1>

                    </div>

                    <p className={`md:max-w-[40%] sm:max-w-[65%] xs:max-w-[75%] max-w-[90%] 
                        mt-4 xs:mt-8 md:mt-16 text-white italic font-poppins text-center md:text-[24px] 
                        sm:text-[25px] xs:text-[18px] text-[15px] xs:leading-[30px] leading-[26px] 
                        sm:leading-[45px] md:leading-[42px] md:mt-[80px] xs:mt-[50px] mt-[10px]`}>
                        Our team of experts use unique data peculiar to Africa and innovative AI
                        and sensor technology to ensure ease of transport and safety. <br/>
                        The next phase in AV technology is evolving and we are ahead of the curve!
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero