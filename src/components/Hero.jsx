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
            <div className="w-full overflow-hidden md:h-[750px] sm:h-[700px] xs:h-[500px] h-[450px]">
                <img src={heroPics} alt="hero pics"
                    className="w-full md:h-[800px] sm:h-[850px] xs:h-[600px] h-[600px] opacity-20 md:-mt-60 
                    sm:-mt-[140px] xs:-mt-40 -mt-20 object-cover"
                    style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />
                <div className={`flex flex-col justify-center items-center my-20 md:-mt-[450px] sm:-mt-[640px] 
                xs:-mt-[370px] -mt-[450px]`}>

                    <div className="flex flex-row justify-center items-center w-full">
                        <h1 className="font-poppins font-semibold sm:text-[45px] xs:text-[35px] text-[22px] 
                            text-white sm:leading-[65px] xs:leading-[48px] leading-[35px] text-center"
                        >
                            Introducing <br/> <span className="sm:text-[52px] xs:text-[38px] text-[26px]">The Next Generation</span>
                            <br />
                            <span className="text-gradient sm:text-[65px] xs:text-[44px] text-[30px] 
                            xs:tracking-normal tracking-[-1px]">Autonomous Vehicles</span>
                        </h1>
                    </div>
                    <h1
                        className="sm:-mt-1 xs:-mt-1 mt-0 font-poppins font-semibold sm:text-[65px] xs:text-[50px] text-[30px] text-white 
                        w-full text-center">
                        For Africa
                    </h1>
                    <p className={`md:max-w-[800px] sm:max-w-[750px] xs:max-w-[480px] max-w-[350px] 
                    mt-4 xs:mt-8 md:mt-16 text-white italic font-poppins text-center md:text-[26px] sm:text-[28px] 
                    xs:text-[20px] text-[16px] xs:tracking-normal tracking-wider leading-[26px] xs:leading-[30px] 
                    sm:leading-[45px] md:leading-[42px]`}>
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