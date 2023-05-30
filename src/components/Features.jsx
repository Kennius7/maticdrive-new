import FeatureCarouselSlider from "./FeatureCarouselSlider";
import features01 from "../assets/FeaturesPics1.jpg";
import features02 from "../assets/FeaturesPics2.jpg";
import features03 from "../assets/FeaturesPics3.jpg";
import features04 from "../assets/FeaturesPics4.jpg";
import features05 from "../assets/FeaturesPics5.jpg";
import features06 from "../assets/FeaturesPics6.jpg";
import features07 from "../assets/FeaturesPics7.jpg";

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import Swiper from "swiper";


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


  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })



  return (
    <section className={`flex flex-col justify-center items-center`}>
      <div className="flex justify-center items-center">
        <FeatureCarouselSlider>
          {featureSlide.map((card) => (
            <div key={card.id} className="flex flex-col justify-center items-center bg-red-300 m-2">
              <img src={card.img} alt={card.name} className="" />
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-poppins font-semibold text-[16px] text-white">
                  {card.name}
                </h4>
                <p className="text-[12px] text-white italic">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </FeatureCarouselSlider>
      </div>



      <swiper-container
        autoplay="true"
        slides-per-view="3" 
        speed="500" 
        loop="true" 
        navigation="true"
        pagination="true"
        allowSlideNext="true"
        allowSlidePrev="true"
        direction="horizontal"
        breakpoints={swiper}
        lazyPreloaderClass="swiper-lazy-preloader"
        >
        <swiper-slide>
          <div className="w-full">
            {featureSlide.map((card) => (
                <div key={card.id} className="flex flex-col justify-center items-center">
                  <img src={card.img} alt={card.name} className="w-full" loading="lazy" />
                  <div className="w-full flex flex-col justify-center items-center">
                    <h4 className="font-poppins font-semibold text-[16px] text-white">
                      {card.name}
                    </h4>
                    <p className="text-[12px] text-white italic">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </swiper-slide>
      </swiper-container>


      <div className={`w-full text-white`}>
        <h2 className={`w-full`}>
          MATIC<span className="text-gradient">DRIVE</span> AVs <br /> Features & Technologies
        </h2>
        <p className={`max-w-[600px] mt-5`}>
        Our autonomous driving control systems are usually divided into three main parts: 
        environmental perception, decision planning and control part. <br /> First, environmental perception 
        collects information around the car through a variety of sensors, including LIDAR, camera, 
        active RADAR, millimeter-wave RADAR, integrated navigation, and so on. <br />
        We have an intelligent control algorithm that calculates the commands and routes according to 
        the driver&apos;s intentions, speed, external environment, etc.
        </p>
      </div>
    </section>
  )
};

export default Features;
