// import CarouselSlider from "./CarouselSlider";
import features01 from "../assets/FeaturesPics1.jpg";
import features02 from "../assets/FeaturesPics2.jpg";
import features03 from "../assets/FeaturesPics3.jpg";
import features04 from "../assets/FeaturesPics4.jpg";
import features05 from "../assets/FeaturesPics5.jpg";
import features06 from "../assets/FeaturesPics6.jpg";
import features07 from "../assets/FeaturesPics7.jpg";
import FeatureSlider from "./FeatureSlider";





const Features = () => {
  const featureSlide = [
    {
      id: 0,
      name: "Matic Drive Features",
      title: "Sensors and technologies",
      img: features01,
    },
    {
      id: 1,
      name: "LIDAR",
      title: "Light detection and ranging sensors",
      img: features02,
    },
    {
      id: 2,
      name: "RADAR",
      title: "Radio detection and ranging sensors",
      img: features03,
    },
    {
      id: 3,
      name: "SONAR",
      title: "Sound sensors systems",
      img: features04,
    },
    {
      id: 4,
      name: "CAMERAS",
      title: "Data reception systems",
      img: features05,
    },
    {
      id: 5,
      name: "GPS Tracking",
      title: "Navigation systems",
      img: features06,
    },
    {
      id: 6,
      name: "Support Systems",
      title: "For the Physically challenged",
      img: features07,
    },
  ];


  return (
    <section className={`flex md:flex-row flex-col md:justify-around justify-center 
      md:items-center xs:items-start items-center w-full md:my-8 my-4`}>

      <div className="md:hidden flex flex-col justify-center items-center text-white w-full my-4">
        <h2 className={`sm:w-[90%] xs:w-[90%] w-full md:text-[45px] sm:text-[50px] xs:text-[35px] text-[28px] font-semibold 
          md:leading-[60px] sm:leading-[60px] xs:leading-[40px] leading-[30px]`}>
          MATIC<span className="text-gradient">&nbsp;DRIVE</span> AVs 
          <br /> 
          <span className="md:text-[45px] sm:text-[50px] xs:text-[35px] text-[24px]">
          Features & Technologies</span>
        </h2>
      </div>

      <div className="md:w-[50vw] md:h-[50vw] w-full flex justify-center items-center ">
        <div className="md:w-[80%] md:h-[80%] xs:w-[90vw] xs:h-[90vw] w-[99vw] h-[99vw]">
          <FeatureSlider 
            slides={featureSlide} 
            autoSlide={true} 
            autoSlideInterval={5000} 
            chevronSize={50}
            chevronOpacity={30} />
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center md:w-[40%] w-full text-white`}>

        <h2 className={`md:block hidden w-full md:text-[45px] xs:text-[35px] text-[28px] font-semibold 
          md:leading-[60px] xs:leading-[40px] leading-[30px]`}>
          MATIC<span className="text-gradient">DRIVE</span> AVs <br /> Features & Technologies
        </h2>

        <p className={`md:w-full sm:w-[88%] xs:w-[90%] w-[95%] mt-5 italic md:text-[20px] sm:text-[25px] 
          xs:text-[18px] text-[15px] md:leading-[35px] sm:leading-[32px] xs:leading-[25px] leading-[20px] 
          md:mt-0 mt-14`}>
          Our autonomous driving control systems are usually divided into three main parts: 
          environmental perception, decision planning and control part. <br /> 
          <br className="md:hidden block" /> First, environmental perception 
          collects information around the car through a variety of sensors, including LIDAR, camera, 
          active RADAR, millimeter-wave RADAR, integrated navigation, and so on. <br /> 
          <br className="md:hidden block" />
          We have an intelligent control algorithm that calculates the commands and routes according to 
          the driver&apos;s intentions, speed, external environment, etc.
        </p>

      </div>

    </section>
  )
};



export default Features;
