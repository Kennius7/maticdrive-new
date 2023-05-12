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
    const [user, currentlyLoggedInUser] = useAuthState(auth);
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

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <nav className={`w-full flex justify-around items-center`}>

            <div className="ss:w-full w-[170px] flex justify-start items-center">
                <Link to="/" className='flex justify-center items-center ss:w-[80px] w-[80px]'>
                    <img src={logo} alt="Maticdrive logo"
                        className={`${scrolled
                            ? "w-[40px] h-[40px] ss:w-[60px] ss:h-[60px] duration-1000"
                            : "w-[50px] h-[50px] ss:w-[70px] ss:h-[70px] duration-1000"} 
                        m-2`}
                    />
                </Link>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className={`${scrolled
                        ? "ss:text-[20px] text-[17px] tracking-normal duration-1000"
                        : "ss:text-[23px] text-[20px] ss:tracking-wider tracking-normal duration-1000"} 
                        font-bold text-white w-full flex justify-start items-center`}>
                        Matic<span className="text-gradient">&nbsp;Drive</span>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-1 ss:justify-center justify-end items-center ss:mr-2">

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
                                ${currentlyLoggedInUser.uid !== blogAdminUid && nav.title === "Blog Admin"
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


                <div className="md:hidden flex justify-center items-center">
                    <div className="w-full mr-2">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[22px] h-[22px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"} 
                        p-6 bg-black-gradient absolute top-16 z-20 right-0 mx-4 min-w-[140px] 
                        rounded-xl sidebar flex-col opacity-90`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] mb-4
                                    ${active === nav.title ? "text-white" : "text-dimWhite"} 
                                    ${user && nav.title === "Sign In" ? "hidden" : "block"}
                                    ${currentlyLoggedInUser.uid !== blogAdminUid && nav.title === "Blog Admin"
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
                        w-[80px] h-[30px] text-[14px] text-start text-primary font-bold pl-2 pb-1 
                        bg-text-gradient rounded-[7px]`}>
                            Sign Out
                        </button>
                    </div>

                </div>


                <div className={`${user ? "block" : "hidden"} 
                flex justify-center items-center text-primary font-bold rounded-[50%] bg-text-gradient 
                w-[27px] h-[27px] p-[15px] ss:py-[5px] mr-2 ss:mr-0`}>
                    {(user && user.displayName.split(" ")[0].split("")[0].toUpperCase())}
                    {(user && user.displayName.split(" ")[1].split("")[0].toUpperCase())}
                </div>

            </div>


        </nav>
    )
}

export default Navbar

