import PropTypes from "prop-types";



const YoutubeEmbed = ({ embedId }) => {

  return (
    <section className="w-full flex justify-center items-center md:p-4 p-0">

      <div className="flex sm:flex-row flex-col sm:justify-around justify-center items-center 
        md:w-[95%] sm:w-[97%] w-[98%] md:h-[600px] sm:h-[550px] xs:h-[900px] h-[800px] 
        sm:my-[200px] my-[100px] md:pl-10 bg-black-gradient-2 sm:rounded-[18px] rounded-[10px]">

        <h2 className={`sm:hidden font-semibold text-white text-center sm:w-[90%] xs:w-[90%] w-full md:text-[40px] 
          sm:text-[50px] xs:text-[30px] text-[28px] md:leading-[50px] sm:leading-[60px] xs:leading-[40px] 
          leading-[30px] xs:mb-6 mb-4 tracking-[2px]`}>
          MATIC<span className="text-gradient">&nbsp;DRIVE&nbsp;</span> 
          <br className="xs:hidden block" />
          <span className="md:text-[45px] sm:text-[50px] xs:text-[30px] text-[24px]">
          AV Highlights</span>
        </h2>

        <div className="border border-yellow-300 md:w-[45vw] md:h-[35vw] sm:w-[50vw] sm:h-[42vw] 
          xs:w-[95vw] xs:h-[80vw] w-[98vw] h-[80vw] sm:rounded-[15px] rounded-[10px]">
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Matic Drive Presentation"
            className="rounded-[15px] w-full h-full"/>
        </div>

        <div className="md:w-[40%] sm:w-[50%] w-[95%] w-[98%] flex flex-col justify-center items-center text-white">

          <h2 className={`hidden sm:block font-semibold sm:w-[90%] xs:w-[90%] w-full md:text-[40px] 
            sm:text-[32px] xs:text-[35px] text-[28px] md:leading-[50px] sm:leading-[40px] xs:leading-[40px] 
            leading-[30px] md:mb-10 sm:mb-4 mb-10 tracking-[3px]`}>
            MATIC<span className="text-gradient">&nbsp;DRIVE</span> 
            <br /> AV&nbsp;
            <span className="md:text-[45px] sm:text-[32px] xs:text-[35px] text-[24px]">
            Highlights</span>
          </h2>

          <div className="w-[95%] italic text-start sm:text-[17px] xs:text-[17px] text-[15px] sm:leading-[28px] 
            leading-[20px] sm:mt-0 xs:mt-[30px] mt-[20px]">
            Although there are still lots of technological challenges to be surmounted in the 
            autonomous driving field, the whole industry is developing so rapidly. <br/> 
            <br className="sm:hidden block"/>
            In the future, autonomous driving will almost certainly become 
            common technology, and that future has arrived with Matic Drive. <br/> 
            <br className="sm:hidden block"/>
            Closed low-speed scenarios such as park sanitation, terminal distribution, 
            plant logistics and airport logistics will be copied and put into application. <br/> 
            <br className="sm:hidden block"/>
            In the urban areas, autonomous driving has begun to be applied. 
            Autonomous driving under public transport will become 
            more and more common.
          </div>

        </div>

      </div>

    </section>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;