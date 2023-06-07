import MaticVid1 from "../assets/MaticDriveVid1.mp4";
import PageTitleHome from "./PageTitleHome";



const Banner = () => {
  return (
    <section className={`w-full flex flex-col justify-center items-center relative`}>

      <video src={MaticVid1} className="w-full object-cover md:h-[700px] sm:h-[600px] xs:h-[400px] h-[300px]" 
        width="1000" height="500" autoPlay muted loop playsInline />

      <PageTitleHome />

      <div className="absolute w-full top-1/3 z-[1]">

        <div className={`font-poppins font-semibold sm:text-[90px] xs:text-[70px] text-[40px] 
        text-white text-opacity-30 text-center`}>
          MatiCDrive
        </div>

        <div className={`font-poppins font-bold sm:text-[50px] xs:text-[25px] text-[16px] 
        text-white sm:tracking-wider tracking-normal text-opacity-50 text-center`}>
          THE FUTURE OF AV IN AFRICA
        </div>

      </div>

    </section>
  );
};

export default Banner;
