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
        <section className="">
            <div className="w-full overflow-hidden ss:h-[750px] h-[450px]">
                <img src={heroPics} alt="hero pics"
                    className="w-full ss:h-[800px] h-[500px] opacity-20 ss:-mt-60 -mt-10"
                    style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />
                <div className={`flex flex-col justify-center items-center my-20 -mt-[400px]`}>

                    <div className="flex flex-row justify-center items-center w-full">
                        <h1 className="font-poppins font-semibold ss:text-[60px] text-[20px] 
                            text-white ss:leading-[80px] leading-[35px] text-center">
                            Introducing <br/> The Next Generation
                            <br />
                            <span className="text-gradient ss:text-[70px] text-[30px] ss:tracking-normal tracking-[-1px]">Autonomous Vehicles</span>
                        </h1>
                    </div>
                    <h1
                        className="-mt-3 font-poppins font-semibold ss:text-[55px] text-[30px] text-white 
                        ss:leading-[100px] leading-[75px] w-full text-center">
                        For Africa
                    </h1>
                    <p className={`max-w-[550px] mt-4 text-white font-poppins text-center ss:text-[20px] text-[16px]`}>
                        Our team of experts use unique data peculiar to Africa and innovative AI
                        and Sensor technology to ensure ease of transport and safety in a vehicle!
                        The next phase in AV technology is evolving and we are ahead of the curve!
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero