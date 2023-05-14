import MaticVid1 from "../assets/MaticDriveVid1.mp4";
// import MaticVid2 from "../assets/MaticDriveVid3.gif";


const Banner = () => {
  return (
    <section className={`flex justify-center items-center relative`}>
        <video src={MaticVid1} className="w-full object-cover h-[300px] xs:h-[400px] sm:h-[600px] md:h-[550px]" 
        width="1000" height="500" autoPlay muted loop playsInline />
        {/* <img src={MaticVid2} alt="Banner Photo"
        className={`xs:hidden block w-full h-[250px] xs:h-[300px] sm:h-[250px] object-cover`}/> */}
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
