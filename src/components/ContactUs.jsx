import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import heroPics from "../assets/handshake-worked.jpeg";
import contactUsPics from "../assets/about-a.jpeg";

const ContactUs = () => {

  const form = useRef();

  const [buttonText, setButtonText] = useState("Send Message");
  const [style, setStyle] = useState("bg-text-gradient");
  const [errorStyle, setErrorStyle] = useState("bg-text-gradient");
  const sentStyle = "sent";
  const rejectStyle = "reject";
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) };

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

        <div className={`w-full flex flex-col justify-center items-center overflow-hidden relative md:h-[550px] 
          sm:h-[800px] xs:h-[500px] h-[370px]`}>
          <img src={heroPics} alt="hero pics"
            className="w-full xs:h-[1000px] h-[450px] opacity-20 object-cover"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />

          <div className="flex flex-col justify-center items-center absolute z-1 md:top-[35%] sm:top-[40%] 
            xs:top-[35%] top-[28%]">
            <div className={`w-full font-poppins text-white text-center sm:text-[55px] xs:text-[40px] 
              text-[22px] font-semibold xs:leading-[22px] leading-[30px] xs:tracking-normal tracking-wider 
              sm:mb-20 xs:mb-10 mb-4`}>
              Get in touch&nbsp;<br className="xs:hidden block"/>
              <span className="text-gradient sm:text-[55px] xs:text-[40px] text-[40px] xs:tracking-normal 
                tracking-widest">
                with us
              </span> 
            </div>
            <p className={`md:max-w-[70%] sm:max-w-[85%] xs:max-w-[88%] max-w-[92%] text-white italic 
              sm:text-center text-start md:text-[22px] sm:text-[28px] xs:text-[20px] text-[14px] 
              sm:leading-[40px] xs:leading-[27px] leading-[22px]`}>
              Get speedy responses from our support at Matic Drive, from enquiries to consultations
              to one on one conversations. <br/> We believe in building connections within Africa and taking it
              worldwide as regards AV technology and the positive impact it is set to make in the lives of people.
            </p>
          </div>
        </div>

        <div className="flex xs:flex-row-reverse flex-col xs:justify-between justify-center items-center 
          overflow-hidden xs:h-[350px]">

          <div className="flex flex-col justify-around items-center bg-white sm:w-[40%] xs:w-[50%] w-full 
            xs:h-[95%] h-[200px]">
              <div className="w-[90%] h-[30%] font-poppins text-primary bg-transparent 
                border-[2px] border-gray-300 rounded-[4px] text-[18px]">
                <a href="mailto:admin@maticdrive.com" target="_blank" rel="noreferrer">admin@maticdrive.com</a>
              </div>
              
              <div className="w-[90%] h-[30%] font-poppins text-primary bg-transparent 
                border-[2px] border-gray-300 rounded-[4px] text-[18px]">
                <a href="https://wa.me/+2348055549979" target="_blank" rel="noreferrer">+2348055549979</a>
              </div>

              <div className="w-[90%] h-[30%] font-poppins text-primary bg-transparent 
                border-[2px] border-gray-300 rounded-[4px] text-[18px]">
                <a href="https://wa.me/+2348055549979" target="_blank" rel="noreferrer">+2348055549979</a>
              </div>
          </div>


          <div className="flex flex-col justify-center items-center overflow-hidden relative 
            sm:w-[60%] xs:w-[50%] w-full xs:h-full h-[400px]">
            <img src={contactUsPics} alt="hero pics"
              className="w-full xs:h-[1000px] h-[600px] object-cover opacity-50 -mt-[70%]"
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            />

            <div className="rounded-[4px] absolute z-1 xs:top-[2%] top-[7%] md:w-[90%] xs:w-full w-[94%]">
              <form ref={form} className="form__content w-full" onSubmit={handleSubmit}>

                <div className="form__box xs:h-[32px] h-[35px]">
                  <input name="fullName" type="text" placeholder="Full Name" required 
                    className="form__input xs:h-[100%] h-[100%]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box xs:h-[32px] h-[35px]">
                  <input name="email" type="email" placeholder="Email Address" required
                    className="form__input xs:h-[100%] h-[100%]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box xs:h-[32px] h-[35px]">
                  <input name="phoneNumber" type="tel" placeholder="Phone No." 
                    className="form__input xs:h-[100%] h-[100%]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box xs:h-[32px] h-[35px]">
                  <input name="subject" type="text" placeholder="Subject" 
                    className="form__input xs:h-[100%] h-[100%]"/>
                  <div className="form__shadow"></div>
                </div>

                <div className="form__box xs:h-[80px] h-[100px]">
                  <textarea name="message" placeholder="Message" required 
                    className="form__messageInput xs:h-[100%] h-[100px]"></textarea>
                  <div className="form__messageShadow"></div>
                </div>

                <div className="form__button">
                  <button
                    className={`form__submit font-semibold sm:text-[20px] text-[14px] 
                      ${style === sentStyle ? "sent" : ""} 
                      ${errorStyle === rejectStyle ? "reject" : ""}`}
                    type="submit">
                    {buttonText}
                  </button>
                  <div className="form__shadow"></div>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}


export default ContactUs;
