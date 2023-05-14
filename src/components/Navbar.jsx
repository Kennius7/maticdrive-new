import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import logo from "../assets/MaticIconSmall1.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";


function Navbar() {
    const navLinks = [
        {
            id: "/",
            title: "Home",
        },
        {
            id: "/aboutus",
            title: "About Us",
        },
        {
            id: "/team",
            title: "Our Team",
        },
        {
            id: "/blog",
            title: "Blogs",
        },
        {
            id: "/createarticle",
            title: "Blog Admin",
        },
        {
            id: "/contactus",
            title: "Contact Us",
        },
        {
            id: "/signin",
            title: "Sign In",
        },
    ];
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user] = useAuthState(auth);
    const [currentlyLoggedInUser] = useAuthState(auth);
    const blogAdminUid = "gjSWaw1PnsZMfCntqQGDCSvErH93";



    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        console.log(currentlyLoggedInUser.uid);

        return () => window.removeEventListener("scroll", onScroll);
    }, [currentlyLoggedInUser.uid])


    return (
        <nav className={`w-full flex justify-around items-center`}>

            <div className="md:w-[200px] sm:w-[350px] xs:w-[280px] w-[170px] flex justify-start items-center">
                <Link to="/" className='flex justify-center items-center md:w-[80px] sm:w-[150px] xs:w-[80px] w-[80px]'>
                    <img src={logo} alt="Maticdrive logo"
                        className={`${scrolled
                            ? "w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] sm:w-[80px] sm:h-[80px] md:w-[50px] md:h-[50px] duration-1000"
                            : "w-[50px] h-[50px] xs:w-[55px] xs:h-[55px] sm:w-[90px] sm:h-[90px] md:w-[60px] md:h-[60px] duration-1000"} 
                        m-2`}
                    />
                </Link>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className={`${scrolled
                        ? "md:text-[20px] sm:text-[35px] xs:text-[20px] text-[17px] duration-1000"
                        : "md:text-[22px] sm:text-[40px] xs:text-[22px] text-[20px] duration-1000"} 
                        font-bold text-white w-full flex justify-start items-center`}>
                        Matic<span className="text-gradient">&nbsp;Drive</span>
                    </div>
                </div>
            </div>

            <div className="w-full sm:w-[500px] flex flex-1 justify-end items-center">

                <div className="w-[550px] md:flex hidden justify-end items-center">
                    <ul className={`list-none flex justify-center items-center`}>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-semibold cursor-pointer hover:border-b-4 
                                hover:pb-2 hover:border-yellow-300 mr-4 flex justify-center items-center
                                ${active === nav.title ? "text-white" : "text-gray-500"} 
                                ${scrolled
                                ? "text-[13px] navText1 duration-1000"
                                : "text-[15px] navText2 duration-1000"} 
                                ${user && nav.title === "Sign In" ? "hidden" : "block"}
                                ${currentlyLoggedInUser.uid === blogAdminUid && nav.title === "Blog Admin"
                                ? "hidden" : "block"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={`${nav.id}`}>{ nav.title }</Link>
                            </li>
                        ))}
                        <button
                            onClick={() => { signOut(auth) }}
                            className={`${user ? "block" : "hidden"} w-[60px] h-[25px] 
                            ${scrolled
                            ? "text-[12px] navText1 duration-1000"
                            : "text-[13px] navText2 duration-1000"} 
                            font-poppins text-center font-semibold text-gray-500 mr-3
                            bg-transparent hover:border-b-[4px] hover:pb-6 hover:border-yellow-300`}
                        >Sign Out</button>
                    </ul>
                </div>


                <div className="md:hidden flex justify-end items-center sm:w-[100px] xs:w-[40px]">
                    <div className="w-full flex justify-end">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className={`${scrolled 
                            ? "sm:w-[36px] sm:h-[36px] xs:w-[20px] xs:h-[20px] w-[18px] h-[18px] duration-1000" 
                            : "sm:w-[40px] sm:h-[40px] xs:w-[22px] xs:h-[22px] w-[22px] h-[22px] duration-1000"}
                            mr-2 xs:mr-2 sm:mr-4 object-contain`}
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"} 
                        p-4 xs:p-4 sm:p-10 bg-black-gradient absolute top-14 xs:top-16 sm:top-24 right-0 
                        w-[120px] xs:w-[150px] sm:w-[260px] mr-2 sm:mr-4 rounded-[10px] sm:rounded-[15px] sidebar 
                        flex-col opacity-90 z-20`}
                    >
                        <ul className="list-none flex justify-center flex-col mb-1 xs:mb-1 sm:mb-2">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-semibold cursor-pointer mb-2 xs:mb-3 
                                    sm:mb-[20px] text-[15px] xs:text-[17px] sm:text-[30px] 
                                    ${active === nav.title ? "text-white" : "text-dimWhite"} 
                                    ${user && nav.title === "Sign In" ? "hidden" : "block"}
                                    ${currentlyLoggedInUser.uid === blogAdminUid && nav.title === "Blog Admin"
                                    ? "hidden" : "block"}`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <Link to={`${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => {
                                signOut(auth);
                                setToggle(!toggle);
                            }}
                            className={`${user ? "block" : "hidden"} 
                            w-[90px] h-[20px] xs:w-[110px] xs:h-[35px] sm:w-[160px] sm:h-[40px] 
                            text-[16px] xs:text-[18px] sm:text-[31px] text-start text-dimWhite
                            font-semibold xs:pb-1 sm:pb-[4px] bg-transparent -mt-2 xs:-mt-2 sm:-mt-3`}>
                            Log out
                        </button>
                    </div>

                </div>


                <div className={`flex justify-center items-center text-primary font-bold rounded-[50%] 
                    bg-text-gradient
                    ${user ? "block" : "hidden"} 
                    ${scrolled 
                    ? "w-[25px] h-[25px] xs:w-[30px] xs:h-[30px] sm:w-[50px] sm:h-[50px] md:w-[28px] md:h-[28px] text-[13px] xs:text-[16px] sm:text-[28px] md:text-[14px]" 
                    : "w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] sm:w-[60px] sm:h-[60px] md:w-[32px] md:h-[32px] text-[15px] xs:text-[18px] sm:text-[32px] md:text-[16px]"}`}
                >

                    {(user && user.displayName.split(" ")[0].split("")[0].toUpperCase())}
                    {(user && user.displayName.split(" ")[1].split("")[0].toUpperCase())}

                </div>

            </div>

        </nav>
    )
}

export default Navbar

