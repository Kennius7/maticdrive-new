import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import heroPics from "../assets/about-a.jpeg";


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
      <div className="items-center w-full">

        <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>
          <img src={heroPics} alt="hero pics"
            className="w-full ss:h-[1000px] h-[460px] opacity-10"
            style={{ transform: `translateY(${offsetY * 0.7}px)` }}
          />

          <div className="ss:-mt-[900px] -mt-[440px]">
            <div className={`w-full font-poppins text-white text-center pt-20 ss:text-[50px] text-[30px] 
            font-semibold ss:mb-12 mb-8`}>
              Get In <span className="text-gradient">Touch</span> with Us
            </div>
            <p className={`ss:max-w-[650px] max-w-[300px] my-5 text-white text-center ss:text-[22px] 
            text-[18px] ss:mb-40 mb-10 ss:leading-[40px] leading-[25px] italic`}>
              Get speedy responses from our support at Matic Drive, from enquiries to consultations
              to one on one conversations. <br/> <br/> We believe in building connections within Africa and taking it
              worldwide as regards AV technology and the positive impact it is set to make in the lives of people.
            </p>
          </div>
        </div>

        <div className="flex ss:flex-row-reverse flex-col justify-center items-center ss:items-start 
          ss:justify-between ss:mt-0 mt-10 ss:h-[530px] ss:pt-20">

          <div className="ss:w-[40%] w-[100%]">
            <div className="max-w-[400px]">
              <p className={`font-poppins text-left ss:max-w-[450px] max-w-[300px] ss:ml-8
                ss:leading-[40px] ss:mb-4 mb-10 ml-4 text-white leading-[30px] ss:text-[18px] text-[18px]`}>
                You can reach us at this email address:&nbsp;
                <a href="mailto:admin@maticdrive.com" target="_blank" rel="noreferrer">
                  <span className="border-b border-transparent text-gradient hover:border-yellow-300 
                  duration-1000">
                    admin@maticdrive.com
                  </span>
                </a>
                <br /> <br className="ss:hidden block"/>
                You can also call us, or click&nbsp;
                <a href="https://wa.me/+2348055549979" target="_blank" rel="noreferrer">
                  <span className="border-b border-transparent text-gradient hover:border-yellow-300 
                  text-[18px] duration-1000">
                    here
                  </span>
                </a>
                &nbsp;to chat us on Whatsapp. <br />
                Alternatively, you can fill this contact form to send us a message!
              </p>
            </div>
          </div>

          <div className="ss:w-[58%] w-full flex flex-col justify-center items-center overflow-hidden">

            <img src={heroPics} alt="hero pics"
              className="ss:hidden block w-full ss:h-[1000px] h-[520px] contain opacity-10"
              style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            />

            <div className="rounded-[4px] ss:w-full w-[94%] ss:mt-[0px] -mt-[500px]">
              <form ref={form} className="form__content w-full" onSubmit={handleSubmit}>
                <div className="form__box ss:h-[40px] h-[30px]">
                  <input name="fullName" className="form__input ss:h-[40px] h-[30px]" type="text" placeholder="Full Name" required />
                  <div className="form__shadow"></div>
                </div>
                <div className="form__box ss:h-[40px] h-[30px]">
                  <input name="email" className="form__input ss:h-[40px] h-[30px]" type="email" placeholder="Email Address" required />
                  <div className="form__shadow"></div>
                </div>
                <div className="form__box ss:h-[40px] h-[30px]">
                  <input name="phoneNumber" className="form__input ss:h-[40px] h-[30px]" type="tel" placeholder="Phone No." />
                  <div className="form__shadow"></div>
                </div>
                <div className="form__box ss:h-[40px] h-[30px]">
                  <input name="subject" className="form__input ss:h-[40px] h-[30px]" type="text" placeholder="Subject" />
                  <div className="form__shadow"></div>
                </div>
                <div className="form__box ss:h-[100px] h-[100px]">
                  <textarea name="message" className="form__messageInput ss:h-[100px] h-[100px]" placeholder="Message" required ></textarea>
                  <div className="form__messageShadow"></div>
                </div>
                <div className="form__button mt-[4px]">
                  <button
                    className={`form__submit ${style === sentStyle ? "sent" : ""} ${errorStyle === rejectStyle ? "reject" : ""}`}
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
