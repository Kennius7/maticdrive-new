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
    <section className={`mb-2`}>
      <div className="items-center w-full">

        <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>
          <img src={heroPics} alt="hero pics"
            className="w-full ss:h-[1000px] h-[500px] opacity-10"
            style={{ transform: `translateY(${offsetY * 0.7}px)` }}
          />

          <div className="ss:-mt-[900px] -mt-[500px]">
            <div className={`w-full font-poppins text-white text-center pt-20 ss:text-[50px] text-[30px] 
            font-semibold ss:mb-12 mb-8`}>
              Get In <span className="text-gradient">Touch</span> with Us
            </div>
            <p className={`ss:max-w-[650px] max-w-[350px] my-5 text-white text-center ss:text-[22px] 
            text-[18px] mb-40 ss:leading-[40px] leading-[30px] italic`}>
              Get speedy responses from our support at Matic Drive, from enquiries to consultations
              to one on one conversations. We believe in building connections within Africa and taking it
              worldwide as regards AV technology and the positive impact it is set to make in the lives of people.
            </p>
          </div>
        </div>

        <div className="flex ss:flex-row-reverse flex-col justify-between ss:mt-20">
          <div className="ss:w-[40%] w-[100%]">
            <p className={`text-center ss:text-left ss:max-w-[450px] sm:mt-8 sm:ml-8 lg:mt-12 lg:ml-12 
            ss:leading-[40px] max-w-[500px] mb-4 text-white`}>
              You can reach us at this email address:
              <a href="mailto:admin@maticdrive.com" target="_blank" rel="noreferrer">
                <span className="border-b border-transparent text-gradient hover:border-yellow-300">
                  admin@maticdrive.com
                </span>
              </a>
              <br /><br />
              You can also call us, or click
              <a href="https://wa.me/+2348055549979" target="_blank" rel="noreferrer">
                <span className="border-b border-transparent text-gradient hover:border-yellow-300 text-[18px]">
                  HERE
                </span>
              </a>
              to chat us on Whatsapp. <br /><br />
              Alternatively, you can fill this contact form to send us a message!
            </p>
          </div>

          <div className="bg-white rounded-[4px] py-3 ss:w-[58%] w-[100%]">
            <form ref={form} className="form__content w-[100%] h-[100%]" onSubmit={handleSubmit}>

              <div className="form__box">
                <input name="fullName" className="form__input " type="text" placeholder="Full Name" required />
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input name="email" className="form__input " type="email" placeholder="Email Address" required />
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input name="phoneNumber" className="form__input " type="tel" placeholder="Phone No." />
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input name="subject" className="form__input" type="text" placeholder="Subject" />
                <div className="form__shadow"></div>
              </div>
              <div className="form__box h-[100px]">
                <textarea name="message" className="form__messageInput" placeholder="Message" required ></textarea>
                <div className="form__messageShadow"></div>
              </div>
              <div className="form__button">
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
    </section>
  )
}


export default ContactUs;
