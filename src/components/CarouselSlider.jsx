import { useState, useEffect } from 'react';
import ChevronRightWhite from "../assets/Chevrons-Right-White.png";
import ChevronLeftWhite from "../assets/Chevrons-Left-White.png";
import PropTypes from 'prop-types';



const CarouselSlider = ({ children: featureSlide, autoSlide=true, autoSlideInterval=2000 }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? featureSlide.length - 1 : currentIndex - 1));
  const next = () => setCurrentIndex((currentIndex) => (currentIndex === featureSlide.length - 1 ? 0 : currentIndex + 1));

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    })


  return (
    <div className="flex justify-center items-center relative cursor-pointer">

      <div className="w-[500px] overflow-hidden">
        <div className="flex justify-center items-center transition-transform ease-out duration-1000" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}> { featureSlide }
        </div>
      </div>

      <div className='flex justify-between items-center absolute inset-0'>
        <button onClick={prev} 
          className='p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 
          hover:ring-gray-200/20 hover:ring-2'>
          <img src={ChevronLeftWhite} alt="chevron left" className="w-[30px] h-[30px]"/>
        </button>
        <button onClick={next} 
          className='p-0 rounded-full bg-transparent text-indigo-700 shadow 
          hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <img src={ChevronRightWhite} alt="chevron right" className="w-[30px] h-[30px]"/>
        </button>
      </div>

      <div className="w-full justify-center items-center flex absolute bottom-20 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {featureSlide.map((card, i) => (
            <div key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full duration-700
              ${currentIndex === i ? "p-2" : "bg-opacity-50"}`}>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  )
}

CarouselSlider.propTypes = {
  children: PropTypes.node,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  }

export default CarouselSlider;