import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    let navigate = useNavigate()

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
    <div className="my-20 flex flex-col justify-center items-center">

        <div className="mx-4 mb-10 font-bold text-[25px] text-center text-white">Sign Up</div>

        <div className="w-full flex flex-col justify-center items-center mb-10">

            <div className='w-full flex justify-center items-center my-4'>
                <input className='w-[80%] h-[30px] rounded-[3px] placeholder:text-gray-500 pl-2' onChange={(e) => {setName(e.target.value)}} type='text' name='name' placeholder='Your Name' />
            </div>

            <div className='w-full flex justify-center items-center my-4'>
                <input className='w-[80%] h-[30px] rounded-[3px] placeholder:text-gray-500 pl-2' onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' placeholder='Your Email' />
            </div>

            <div className='w-full flex justify-center items-center my-4'>
                <input className='w-[80%] h-[30px] rounded-[3px] placeholder:text-gray-500 pl-2' onChange={(e) => {setPassword(e.target.value)}} type='password' name='passsword' placeholder='Your Password' />
            </div>

        </div>
        

        <div className='w-full flex justify-center items-center'>
            <button className='w-[80%] h-[40px] rounded-[5px] bg-text-gradient text-primary font-bold text-[18px] tracking-widest' type="button" onClick={handleSignUp}>Sign Up</button>
        </div>

        <div className="flex justify-center items-center mt-3">
            <Link to="/signin"><p className="text-white font-semibold text-[14px] tracking-wider">Already signed up? Sign In.</p></Link>
        </div>

    </div>
  )
}


export default Register