// import React from 'react'


function Hero() {
    return (
        <section className="relative py-0">
            <div>
                <div className="hero-bg-image"></div>
                <div className={`flex flex-col justify-center items-center absolute z-[1] -mt-[600px] mx-72`}>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="font-poppins font-semibold ss:text-[60px] text-[32px] 
                            text-white ss:leading-[70px] leading-[55px] text-center">
                            The Next Generation
                            <br />
                            <span className="text-gradient">Autonomous Vehicles</span>
                        </h1>
                    </div>
                    <h1
                        className="-mt-3 font-poppins font-semibold ss:text-[55px] text-[40px] text-white 
                    ss:leading-[100.8px] leading-[75px] w-full text-center">
                        For Africa
                    </h1>
                    <p className={`max-w-[550px] mt-4 text-white font-poppins text-center text-[20px]`}>
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