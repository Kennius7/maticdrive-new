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
            id: "/contactus",
            title: "Contact Us",
        },
        {
            id: "/blog",
            title: "Blogs",
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
        <nav className={`w-full flex justify-between items-center`}>

            <div className="">
                <div className="flex justify-center items-center">
                    <Link to="/">
                        <img src={logo} alt="Maticdrive logo"
                            className={`${scrolled 
                            ? "w-[35px] h-[35px] ss:w-[50px] ss:h-[50px] duration-1000"
                            : "w-[50px] h-[50px] ss:w-[70px] ss:h-[70px] duration-1000"} 
                            m-2`}
                        />
                    </Link>
                    <div className="flex flex-col -mt-2">
                        <div className={`${scrolled 
                                        ? "text-[20px] tracking-wider" 
                                        : "text-[25px] tracking-widest"} 
                                        font-semibold text-white`}
                                        >Matic <span className="text-gradient">Drive</span>
                        </div>
                    </div>
                </div>
            </div>


            <ul className="list-none md:flex hidden justify-center items-center">
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer  
                        hover:border-b-4 hover:pb-2 hover:border-yellow-300 mr-6 
                        ${active === nav.title ? "text-white" : "text-gray-500"} 
                        ${scrolled 
                        ? "text-[15px] navText1 duration-1000" 
                        : "text-[16px] navText2 duration-1000"} 
                        ${user && nav.title === "Sign In" ? "hidden" : "block"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <Link to={`${nav.id}`}>{nav.title}</Link>
                    </li>
                ))}
                <button
                    onClick={() => { signOut(auth) }}
                    className={`${user ? "block" : "hidden"} w-[80px] h-[25px] 
                    ${scrolled 
                    ? "text-[14px] navText1 duration-1000" 
                    : "text-[16px] navText2 duration-1000"} 
                    font-poppins text-center font-semibold text-gray-500 
                    bg-transparent hover:border-b-4 hover:pb-8 hover:border-yellow-300`}
                >Sign Out</button>
            </ul>


            <div className="md:hidden flex flex-1 justify-end items-center pr-4">

                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[22px] h-[22px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"} 
                    p-6 bg-black-gradient absolute top-20 z-20 right-0 mx-4 my-2 min-w-[140px] 
                    rounded-xl sidebar flex-col`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] mb-4
                                ${active === nav.title ? "text-white" : "text-dimWhite"} 
                                ${user && nav.title === "Sign In" ? "hidden" : "block"}`}
                                onClick={() => {
                                    setActive(nav.title);
                                    setToggle(!toggle);
                                }}
                            >
                                <Link to={`${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => {
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
            w-[30px] h-[30px] mr-4`}>
                {
                    (
                        user && user.displayName.split(" ")[0].split("")[0].toUpperCase()
                    )
                }
                {
                    (
                        user && user.displayName.split(" ")[1].split("")[0].toUpperCase()
                    )
                }
            </div>
            
        </nav>
    )
}

export default Navbar

