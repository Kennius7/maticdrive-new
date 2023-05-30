import React, { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight } from "react-feather";




const CarouselSlider = ({ children: feedback, autoSlide=false, autoSlideInterval=5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

const prev = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? feedback.length - 1 : currentIndex - 1));

const next = () => setCurrentIndex((currentIndex) => (currentIndex === feedback.length - 1 ? 0 : currentIndex + 1));

useEffect(() => {
  if (!autoSlide) return
  const slideInterval = setInterval(next, autoSlideInterval);
  return () => clearInterval(slideInterval);

  }, [])



  return (
    <div className='flex justify-center items-center relative cursor-pointer'>
      <div key={feedback[currentIndex].id} className=''>
        <div className="flex justify-center items-center transition-transform ease-out" style={{ transform: `translateX(-${currentIndex * 100})` }}>
          { feedback[currentIndex] }
        </div>
      </div>

      <div className='flex justify-between items-center absolute inset-0 -p-10'>
        <button onClick={prev} className='p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <ChevronLeft size={35} />
        </button>
        <button onClick={next} className='p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2'>
          <ChevronRight size={35} />
        </button>
      </div>

      <div className="absolute bottom-20 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {feedback.map((card, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentIndex === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>

    </div>
    
  )
}

export default CarouselSlider;