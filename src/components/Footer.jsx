// import React from 'react'
import { Link } from "react-router-dom";
import facebookIcon from "../assets/Mfacebook.svg";
import twitterIcon from "../assets/Mtwitter-squared.png";
import instagramIcon from "../assets/Minstagram.svg";
import linkedInIcon from "../assets/Mlinkedin.svg";
// import whatsappIcon from "../assets/Shield.svg";
import youtubeIcon from "../assets/Myoutube.svg";
import phoneIcon from "../assets/Discount.svg";
import emailIcon from "../assets/Send.svg";


function Footer() {
    return (
        <footer className="w-full bg-gray-900">

            <div className="w-full flex flex-col justify-center items-center pt-6">

                <div className="w-full flex flex-col justify-center items-center ss:hidden mb-6">

                    <Link to="/">
                        <div className={`text-gray-400 ss:mb-8 font-bold ss:text-[20px] text-[16px]
                            text-center`}>Matic
                            <span className={`text-gradient ss:mb-8 font-bold ss:text-[20px] 
                            text-[16px]`}> Drive</span>
                        </div>
                    </Link>
                    <p className={`text-gray-400 ss:leading-[35px] leading-[20px] ss:text-[18px] 
                            text-[15px] w-full text-center max-w-[310px]`}>
                        Develop your AV business model with our agile team,
                        to create efficient AVs that can deliver optimum services
                        anywhere in Africa.
                    </p>

                </div>

                <div className="w-full flex flex-row justify-around items-start ss:mb-16 ss:mt-20">

                    <div className="ss:block hidden flex flex-col ss:max-w-[400px]">
                        <Link to="/">
                            <div className={`text-gray-400 ss:mb-8 font-bold ss:text-[20px] text-[16px]`}>Matic
                                <span className={`text-gradient ss:mb-8 font-bold ss:text-[20px] 
                                    text-[16px]`}> Drive</span>
                            </div>
                        </Link>
                        <p className={`w-full text-gray-400 leading-[35px] text-[20px]`}>
                            Develop your AV business model with our agile team,
                            to create efficient AVs that can deliver optimum services
                            anywhere in Africa.
                        </p>
                    </div>

                    <div className="flex flex-col max-w-[160px] ss:max-w-[400px] mr-1">
                        <h2 className={`text-gray-400 ss:mb-8 font-bold ss:text-[20px] text-[16px]`}>Information</h2>
                        <ul className="list-unstyled flex flex-col text-gray-400 ss:text-[20px] text-[15px]">
                            <li className=""><Link to="/aboutus" >About</Link></li>
                            <li className=""><Link to="/features" >Services</Link></li>
                            <li className="ss:tracking-normal tracking-[-1px]"><Link to="/legal" >Privacy &amp; Cookies Policy</Link></li>
                            <li className=""><Link to="/blog" >Blog</Link></li>
                            <li className=""><Link to="/contactus" >Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={`flex flex-col justify-start max-w-[160px] ss:max-w-[400px]`}>
                        <h2 className={`text-gray-400 font-bold ss:mb-8 mb-2 ss:text-[20px] 
                        text-[16px]`}>Have Questions?</h2>

                        <ul className="w-full text-gray-400 flex flex-col justify-start">
                            <li className="ss:mb-4 ss:-ml-10">
                                <a href="#" className="mb-2 flex flex-row justify-center items-center">
                                    <img src={phoneIcon} alt="phone" className="mr-2 w-[15px] h-[15px] ss:w-[30px] ss:h-[30px]" />
                                    <span className="ss:text-[20px] text-[14px]">+2349055570782</span>
                                </a>
                            </li>
                            <li className="ss:mb-4 ss:-ml-3">
                                <a href="#" className="flex flex-row justify-center items-center">
                                    <img src={emailIcon} alt="email" className="mr-2 ml-2 w-[15px] h-[15px] ss:w-[30px] ss:h-[30px]" />
                                    <span className={`ss:text-[20px] text-[14px] ss:tracking-normal 
                                    tracking-[-1px]`}>admin@maticdrive.com</span>
                                </a>
                            </li>

                            <ul className="ss:flex hidden flex-row justify-around items-center mt-4">
                                <li className=""><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="FB" className="w-[30px] h-[30px]" /></a></li>
                                <li className=""><a href="https://twitter.com/maticdrive1?s=11&t=7_0FyjTgyXMQm84ZH0Psfw" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Tw" className="w-[30px] h-[30px]" /></a></li>
                                {/* <li className=""><a href="https://wa.me/+2349055570782" target="_blank" rel="noreferrer"><img src={whatsappIcon} alt="Wh" className="icon-whatsapp" /></a></li> */}
                                <li className=""><a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="IG" className="w-[30px] h-[30px]" /></a></li>
                                <li className=""><a href="https://www.linkedin.com/company/maticdrive" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="In" className="w-[30px] h-[30px]" /></a></li>
                                <li className=""><a href="https://youtube.com/@maticdrive" target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="Yt" className="w-[30px] h-[40px]" /></a></li>
                            </ul>
                        </ul>

                    </div>

                </div>
                <ul className="ss:hidden flex flex-row justify-around items-center my-4 w-[320px]">
                    <li className=""><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="FB" className="w-[30px] h-[30px]" /></a></li>
                    <li className=""><a href="https://twitter.com/maticdrive1?s=11&t=7_0FyjTgyXMQm84ZH0Psfw" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Tw" className="w-[30px] h-[30px]" /></a></li>
                    {/* <li className=""><a href="https://wa.me/+2349055570782" target="_blank" rel="noreferrer"><img src={whatsappIcon} alt="Wh" className="icon-whatsapp" /></a></li> */}
                    <li className=""><a href="https://instagram.com/maticdrive?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="IG" className="w-[30px] h-[30px]" /></a></li>
                    <li className=""><a href="https://www.linkedin.com/company/maticdrive" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="In" className="w-[30px] h-[30px]" /></a></li>
                    <li className=""><a href="https://youtube.com/@maticdrive" target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="Yt" className="w-[30px] h-[40px]" /></a></li>
                </ul>


                <div className="w-full text-gray-400 text-center mb-4 ss:mb-6 text-[14px] ss:text-[20px]">
                    Copyright &copy; All rights reserved | MaticDrive Inc.
                </div>

            </div>

        </footer>
    )
}

export default Footer