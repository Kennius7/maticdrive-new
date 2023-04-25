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
        <footer className="-mb-20 bg-gray-900">
            <div className="pt-12 mb-16">
                <div className="flex flex-row justify-around items-center mx-32 mb-20">
                    <div className="flex flex-col mt-2">
                        <div className="w-[300px]">
                            <Link to="/"><div className="text-white mb-8 font-bold text-[20px]">Matic <span className="text-gradient mb-8 font-bold text-[20px]">Drive</span></div></Link>
                            <p className="text-white leading-[35px]">Develop your AV business model with our agile team, to create efficient AVs that can deliver optimum services anywhere in Africa.</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <h2 className="text-white mb-8 font-bold text-[20px]">Information</h2>
                            <ul className="list-unstyled flex flex-col text-white">
                                <li className="mb-2"><Link to="/aboutus" >About</Link></li>
                                <li className="mb-2"><Link to="/features" >Services</Link></li>
                                <li className="mb-2"><Link to="/legal" >Privacy &amp; Cookies Policy</Link></li>
                                <li className="mb-2"><Link to="/blog" >Blog</Link></li>
                                <li className="mb-2"><Link to="/contactus" >Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold mb-8 text-[20px]">Have a Questions?</h2>
                            <div className="text-white flex flex-col">
                                <ul>
                                    <li><a href="#" className="mb-4 -ml-6 flex flex-row justify-center items-center"><img src={phoneIcon} alt="phone" className="mr-2 w-[30px] h-[30px]" /><span className="text">+234 9055 570 782</span></a></li>
                                    <li><a href="#" className="mb-4 flex flex-row justify-center items-center"><img src={emailIcon} alt="email" className="mr-2 w-[20px] h-[20px]" /><span className="text">admin@maticdrive.com</span></a></li>
                                    <ul className="flex flex-row justify-around items-center mt-16">
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
                    </div>
                </div>
                <div className="pb-10">
                    <div className="text-center">
                        <div className="text-white mb-8">Copyright &copy; All rights reserved | MaticDrive Inc.</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer