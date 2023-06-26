import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import heroPics from "../assets/handshake-worked.jpeg";
import PageTitleContact from "./PageTitleContact";
import whatsappIcons from "../assets/whatsapp-icon1.png";
import phoneIcons from "../assets/phone-icons.png";
import emailIcons from "../assets/email-icons.png";

// import contactUsPics from "../assets/about-a.jpeg";

const ContactUs = () => {

  const form = useRef();

  const [buttonText, setButtonText] = useState("Send Message");
  const [style, setStyle] = useState("bg-text-gradient");
  const [errorStyle, setErrorStyle] = useState("bg-text-gradient");
  const sentStyle = "sent";
  const rejectStyle = "reject";
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.scrollY) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...")

    emailjs.sendForm('service_eeeosp7', 'template_ltnvx66', form.current, 'h-F7iEPReaPmY032e')
      .then((result) => {
        console.log(result.text, result.status);
        setTimeout(() => {
          setStyle("sent")
          setButtonText("Message Sent")
        }, 3000);
        setTimeout(() => {
          e.target.reset();
          setStyle("bg-text-gradient")
          setButtonText("Send Message")
        }, 7000);
      }, (error) => {
        console.log(error.text, error.status);
        setTimeout(() => {
          setErrorStyle("reject")
          setButtonText("Message Not Sent");
        }, 3000);
        setTimeout(() => {
          e.target.reset();
          setButtonText("Please Try Again")
        }, 7000);
        setTimeout(() => {
          setErrorStyle("error-default")
          setButtonText("Send Message")
        }, 10000);
      });
  };



  return (
    <section className={`w-full`}>

      <div className="w-full">

        <div className={`w-full flex flex-col justify-center items-center overflow-hidden relative 
          sm:h-[700px] xs:h-[500px] h-[450px]`}>

          <img src={heroPics} alt="hero pics"
            className="w-full sm:h-[900px] xs:h-[800px] h-[500px] opacity-30 object-cover"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />

          <PageTitleContact/>

          <div className="flex flex-col justify-center items-center absolute z-1 sm:top-[35%] 
            xs:top-[30%] top-[35%]">
            
            <div className={`w-full font-poppins text-white text-center sm:text-[40px] 
              xs:text-[28px] text-[22px] font-semibold xs:tracking-normal 
              tracking-wider sm:mb-12 xs:mb-10 mb-8`}>
              Get in touch&nbsp;
              <br className="xs:hidden block"/>
              <span className="text-gradient sm:text-[40px] xs:text-[32px] text-[40px] 
                xs:tracking-normal tracking-widest">
                with us
              </span>
            </div>

            <p className={`sm:max-w-[65%] xs:max-w-[75%] max-w-[85%] text-white italic 
              text-center sm:text-[25px] xs:text-[18px] text-[16px] 
              sm:leading-[40px] xs:leading-[30px] leading-[22px]`}>
              Get speedy responses from our support at Matic Drive, from enquiries to consultations
              to one on one conversations.
            </p>

          </div>

        </div>



        <div className="w-full flex sm:flex-row flex-col-reverse sm:justify-around justify-center 
          md:items-start xs:items-start items-center overflow-hidden md:h-[700px] 
          md:pt-20 md:py-0 py-4 bg-white">

          <div className="flex flex-col justify-center items-center overflow-hidden 
            md:w-[60%] sm:w-[60%] xs:w-[72%] w-full md:h-full xs:h-full h-full sm:ml-0 xs:ml-6 ml-0">

            <div className="flex justify-center items-center rounded-[4px] md:w-[90%] xs:w-full w-[90%] 
              md:h-[95%] xs:h-[96%] h-[98%] bg-gray-300">

              <form ref={form} onSubmit={handleSubmit} 
                className="form__content bg-transparent md:w-[80%] w-[84%] md:h-[85%] xs:h-[95%] 
                  sm:my-8 xs:my-6 my-4">

                <div className="form__box md:h-[55px] sm:h-[50px] xs:h-[45px] h-[38px]">
                  <input name="fullName" type="text" placeholder="Full Name" required 
                    className="form__input xs:h-[100%] h-[100%] placeholder:italic placeholder:text-gray-400
                      md:placeholder:text-[18px] sm:placeholder:text-[18px] xs:placeholder:text-[15px] 
                      placeholder:text-[13px]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box md:h-[55px] sm:h-[50px] xs:h-[45px] h-[38px]">
                  <input name="email" type="email" placeholder="Email Address" required
                    className="form__input xs:h-[100%] h-[100%] placeholder:italic placeholder:text-gray-400
                      md:placeholder:text-[18px] sm:placeholder:text-[18px] xs:placeholder:text-[15px] 
                      placeholder:text-[13px]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box md:h-[55px] sm:h-[50px] xs:h-[45px] h-[38px]">
                  <input name="phoneNumber" type="tel" placeholder="Phone No." 
                    className="form__input xs:h-[100%] h-[100%] placeholder:italic placeholder:text-gray-400
                      md:placeholder:text-[18px] sm:placeholder:text-[18px] xs:placeholder:text-[15px] 
                      placeholder:text-[13px]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box md:h-[55px] sm:h-[50px] xs:h-[45px] h-[38px]">
                  <input name="subject" type="text" placeholder="Subject" 
                    className="form__input xs:h-[100%] h-[100%] placeholder:italic placeholder:text-gray-400
                      md:placeholder:text-[18px] sm:placeholder:text-[18px] xs:placeholder:text-[15px] 
                      placeholder:text-[13px]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box xs:h-[160px] h-[80px]">
                  <textarea name="message" placeholder="Message" required 
                    className="form__messageInput xs:h-[100%] h-[100%] placeholder:italic 
                      placeholder:text-gray-400 
                      md:placeholder:text-[18px] sm:placeholder:text-[18px] xs:placeholder:text-[15px] 
                      placeholder:text-[13px] p-2"></textarea>
                  <div className="form__messageShadow"></div>
                </div>

                <div className="form__button md:rounded-[8px] rounded-[6px] w-[98%] 
                  sm:h-[55px] h-[45px] md:mt-0 mt-6">

                  <button type="submit"
                    className={`form__submit font-semibold font-poppins sm:rounded-[8px] rounded-[6px] 
                      sm:text-[20px] xs:text-[16px] text-[12px] md:w-[45%] w-[50%] h-full
                      ${style === sentStyle ? "sent" : ""} 
                      ${errorStyle === rejectStyle ? "reject" : ""}`}>
                    {buttonText}
                  </button>

                  <div className="form__shadow2 md:rounded-[8px] rounded-[6px] md:w-[45%] w-[50%] h-full"></div>

                </div>

              </form>

            </div>

          </div>



          <div className="flex flex-col justify-around items-center bg-white md:w-[30%]
            sm:w-[40%] xs:w-[80%] w-full md:h-[390px] h-[330px] md:pt-3 pt-0 md:mb-0 mb-3">

              <div className="font-poppins text-primary bg-transparent flex justify-start items-center
                border-[2px] border-gray-300 rounded-[4px] w-[90%] h-[30%] text-[18px] p-2">
                <div className="md:m-3 m-2 md:pb-0 pb-2">
                  <img src={phoneIcons} alt="whatsapp icons" className="md:w-8 md:h-8 w-7 h-7"/>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[16px] text-gray-500">PHONE No.</div>
                  <a href="https://wa.me/+2349055570782" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-bold">+2349055570782
                  </a>
                </div>
              </div>
              
              <div className="font-poppins text-primary bg-transparent flex justify-start items-center
                border-[2px] border-gray-300 rounded-[4px] w-[90%] h-[30%] text-[18px] p-2">
                <div className="md:m-3 m-2 md:pb-0 pb-2">
                  <img src={emailIcons} alt="whatsapp icons" className="md:w-8 md:h-8 w-7 h-7"/>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[16px] text-gray-500">Email Address</div>
                  <a href="mailto:admin@maticdrive.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-bold">admin@maticdrive.com
                  </a>
                </div>
              </div>

              <div className="font-poppins text-primary bg-transparent flex justify-start items-center
                border-[2px] border-gray-300 rounded-[4px] w-[90%] h-[30%] text-[18px] p-2">
                <div className="md:m-3 m-2 md:pb-0 pb-2">
                  <img src={whatsappIcons} alt="whatsapp icons" className="md:w-8 md:h-8 w-7 h-7"/>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[16px] text-gray-500">Whatsapp No.</div>
                  <a href="https://wa.me/+2349055570782" 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-bold">+2349055570782
                  </a>
                </div>
              </div>
          </div>

        </div>

      </div>

    </section>
  )
}


export default ContactUs;
