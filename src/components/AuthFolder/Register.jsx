import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import heroPics from "../../assets/about-a.jpeg";



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [offsetY, setOffsetY] = useState(0);
    let navigate = useNavigate()

    const handleScroll = () => { setOffsetY(window.pageYOffset) };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            toast("Please fill out all necessary fields", { type: "error" });
            return;
          }
      

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, { displayName: name });
            navigate("/blog");
        } catch (error) {
            toast(error.code, { type: "error" });
            toast(error.message, { type: "error" });
        }
        
    }



  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden relative
        md:h-[700px] sm:h-[1050px] xs:h-[600px] h-[700px]">

        <img src={heroPics} alt="hero pics"
            className="w-full opacity-10 object-cover md:h-[800px] sm:h-[1150px] xs:h-[700px] h-[1100px]"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />

        <div className="flex flex-col justify-center items-center absolute z-[1] bg-gray-700 rounded-[3px] 
            md:top-[20%] sm:top-[35%] xs:top-[25%] top-[20%] md:w-[50%] sm:w-[80%] xs:w-[75%] w-[98%] md:h-[350px] 
            sm:h-[500px] h-[380px]">
            <div className="w-[96%] font-bold md:text-[18px] sm:text-[30px] text-[20px] text-start text-white tracking-wider 
                md:mb-6 sm:mb-8 mb-4">Sign Up</div>

            <div className="w-full flex flex-col justify-center items-center mb-6">
                <div className="w-full flex justify-center items-center sm:mb-6 mb-4">
                    <input 
                        onChange={(e) => {setName(e.target.value)}} 
                        type="text" 
                        name="name"
                        placeholder="Your Name"
                        className="w-[96%] md:h-[30px] sm:h-[50px] h-[30px] rounded-[3px] pl-2 text-primary 
                        bg-white placeholder:text-gray-700 md:placeholder:text-[14px] sm:placeholder:text-[20px] 
                        md:text-[14px] sm:text-[20px]"
                    />
                </div>

                <div className="w-full flex justify-center items-center sm:mb-6 mb-4">
                    <input
                        onChange={(e) => {setEmail(e.target.value)}} 
                        type="email"
                        name="email"
                        placeholder="Your Email" 
                        className="w-[96%] md:h-[30px] sm:h-[50px] h-[30px] rounded-[3px] pl-2 text-primary 
                        bg-white placeholder:text-gray-700 md:placeholder:text-[14px] sm:placeholder:text-[20px] 
                        md:text-[14px] sm:text-[20px]"
                    />
                </div>

                <div className="w-full flex justify-center items-center sm:mb-6 mb-4">
                    <input
                        onChange={(e) => {setPassword(e.target.value)}} 
                        type="password"
                        name="passsword"
                        placeholder="Your Password"
                        className="w-[96%] md:h-[30px] sm:h-[50px] h-[30px] rounded-[3px] pl-2 text-primary 
                        bg-white placeholder:text-gray-700 md:placeholder:text-[14px] sm:placeholder:text-[20px] 
                        md:text-[14px] sm:text-[20px]"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center items-center md:mb-2 sm:mb-4 mb-2">
                <button
                    type="button" 
                    onClick={handleSignUp}
                    className="w-[96%] md:h-[32px] sm:h-[60px] h-[40px] rounded-[4px] md:text-[16px] 
                    sm:text-[22px] text-[16px] md:tracking-wider sm:tracking-widest tracking-wider bg-text-gradient sm:font-bold font-semibold 
                    text-primary sm:border-2 border border-yellow-600"
                >Sign Up
                </button>
            </div>

            <div className="w-[96%] flex justify-start items-center">
                <Link to="/signin">
                    <p className="w-full text-white font-semibold md:text-[14px] sm:text-[24px] text-[16px]">
                        Already signed up? Sign In
                    </p>
                </Link>
            </div>

        </div>

    </div>
  )
}


export default Register