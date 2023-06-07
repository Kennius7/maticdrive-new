import ChevronRightWhite from "../assets/Chevrons-Right-White.png";


function PageTitleAbout() {
    return (
        <div className="w-[50%] flex justify-start items-center absolute z-[2] md:top-[13%] md:left-[2%] 
            sm:top-[15%] xs:top-[12%] top-[10%] left-[4%]">

            <div className="font-poppins text-dimWhite md:text-[23px] sm:text-[20px] text-[13px] 
                opacity-70">HOME</div>

            <div className="flex justify-start items-center relative opacity-70 md:pl-3 sm:pl-3 pl-1 
                md:-mt-0 sm:-mt-1 mt-0">

                <img src={ChevronRightWhite} alt="chevron right" 
                    className={`sm:w-[15px] sm:h-[15px] w-[11px] h-[11px]`}/>

                <img src={ChevronRightWhite} alt="chevron right" 
                    className={`absolute z-[3] md:ml-2 sm:ml-3 ml-2 sm:w-[15px] sm:h-[15px] w-[11px] h-[11px]`}/>

            </div>

            <div className="font-poppins text-dimWhite md:text-[23px] sm:text-[20px] text-[13px] opacity-70 
                md:pl-4 sm:pl-5 pl-3">ABOUT US</div>
            
        </div>
    )
}

export default PageTitleAbout