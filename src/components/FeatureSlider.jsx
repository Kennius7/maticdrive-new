import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ChevronRightWhite from "../assets/Chevrons-Right-White.png";
import ChevronLeftWhite from "../assets/Chevrons-Left-White.png";


function FeatureSlider({slides, autoSlide, autoSlideInterval, chevronSize, chevronOpacity}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));

    const next = () => setCurrentIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));

    useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    })

    return (
        <div className="w-full h-full flex flex-col justify-center items-center relative">

            <div className="w-full h-full flex justify-center items-center">
                <div className="text-white w-full h-full duration-[3.0s] bg-cover md:rounded-[20px] rounded-[10px]" 
                    style={{backgroundImage: `url(${slides[currentIndex].img})`}}></div>
            </div>
            
            <div className={`w-full flex justify-between items-center absolute opacity-${chevronOpacity} 
                hover:opacity-90 focus:opacity-90`}>
                <button onClick={prev} 
                    className="p-0 rounded-full bg-transparent text-indigo-700 shadow hover:bg-primary/50 
                    hover:ring-gray-200/20 hover:ring-2">
                    <img src={ChevronLeftWhite} alt="chevron left" 
                        className={`w-[${chevronSize}px] h-[${chevronSize}px]`}/>
                </button>
                <button onClick={next} 
                    className="p-0 rounded-full bg-transparent text-indigo-700 shadow 
                    hover:bg-primary/50 hover:ring-gray-200/20 hover:ring-2">
                    <img src={ChevronRightWhite} alt="chevron right" 
                        className={`w-[${chevronSize}px] h-[${chevronSize}px]`}/>
                </button>
            </div>

            <div className="w-full justify-center items-center flex absolute md:-bottom-10 -bottom-5 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((card, i) => (
                        <div key={i}
                            onClick={()=>setCurrentIndex(i)}
                            className={`transition-all bg-white rounded-full duration-700 
                            cursor-pointer border border-yellow-400 md:w-[12px] md:h-[8px] w-[10px] h-[6px]
                            ${currentIndex === i ? "md:p-2 p-1 border-green-400" : "bg-opacity-50"}`}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

FeatureSlider.propTypes = {
    slides: PropTypes.array.isRequired,
    autoSlide: PropTypes.bool.isRequired,
    autoSlideInterval: PropTypes.number.isRequired,
    chevronSize: PropTypes.number.isRequired,
    chevronOpacity: PropTypes.number.isRequired,
    }

export default FeatureSlider