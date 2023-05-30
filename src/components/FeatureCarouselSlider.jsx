import { useState, useEffect } from 'react';
import ChevronRightWhite from "../assets/Chevrons-Right-White.png";
import ChevronLeftWhite from "../assets/Chevrons-Left-White.png";





// eslint-disable-next-line react/prop-types
const CarouselSlider = ({ children: featureSlide, autoSlide = true, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

const prev = () => {
  // eslint-disable-next-line react/prop-types
  setCurrentIndex((currentIndex) => (currentIndex === 0 ? featureSlide.length - 1 : currentIndex - 1));
};

const next = () => {
  // eslint-disable-next-line react/prop-types
  setCurrentIndex((currentIndex) => (currentIndex === featureSlide.length - 1 ? 0 : currentIndex + 1));
};

useEffect(() => {
  if (!autoSlide) return

  const slideInterval = setInterval(next, autoSlideInterval);

  return () => clearInterval(slideInterval);
  })



  return (
    <div className="w-full flex justify-center items-center relative cursor-pointer">

      <div className="flex transition-transform ease-out duration-500 overflow-hidden" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        { featureSlide }
      </div>

      <div className='flex justify-between items-center absolute inset-0'>
        <button onClick={prev} 
          className='rounded-full shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <img src={ChevronLeftWhite} className="w-[24px] h-[24px]" />
        </button>
        <button onClick={next} 
          className='p-0 rounded-full shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
        <img src={ChevronRightWhite} className="w-[24px] h-[24px]" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center gap-2">
          {/* eslint-disable-next-line react/prop-types*/}
          { featureSlide.map((_, i) => (
            <div key={i} 
              className={`transition-all w-3 h-3 bg-white rounded-full 
                ${currentIndex === i ? "p-2" : "opacity-50" }`}>

            </div>
          )) }
        </div>
      </div>

    </div>
  )
}

export default CarouselSlider;