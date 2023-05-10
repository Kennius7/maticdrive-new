import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth, provider } from '../../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { googleLogo2 } from '../../assets';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()


  const handleSignIn = async () => {
    if (!email || !password) {
      toast("Please fill out all necessary fields", { type: "error" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/blog");
    } catch (error) {
      toast("Error signing in", { type: "error" })
    }
  }

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = provider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(result);
      navigate("/blog");
    }).catch(() => {
      toast("Error signing in with Google", { type: "error" });
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = provider.credentialFromError(error);
    });
  }

  


  return (
    <div className="my-20 flex flex-col justify-center items-center">
      
      <div className="mx-4 mb-10 font-bold text-[25px] text-center text-white tracking-wider">Sign In</div>

      <div className="w-full flex flex-col justify-center items-center mb-6">
          <div className='w-full flex my-4 justify-center items-center'>
              <input className='w-[80%] h-[30px] rounded-[3px] pl-2 placeholder:text-gray-700' onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' placeholder='Enter your Email' />
          </div>

          <div className='w-full flex my-4 justify-center items-center'>
              <input className='w-[80%] h-[30px] rounded-[3px] pl-2 placeholder:text-gray-700' onChange={(e) => {setPassword(e.target.value)}} type='password' name='passsword' placeholder='Enter your password' />
          </div>
      </div>
      
      <div className='w-full flex justify-center items-center mt-6'>
          <button className='w-[80%] h-[40px] rounded-[4px] text-[18px] tracking-wider bg-text-gradient font-bold text-primary' type="button" onClick={handleSignIn}>Login</button>
      </div>

      <div className="flex justify-center items-center mt-2">
        <p className="text-red-400 font-semibold tracking-wider"><Link to="/signup">Create Account</Link></p>
      </div>

      <div className="w-full flex justify-center items-center mt-16">
        <button onClick={handleGoogleSignIn} className="flex justify-center items-center text-white font-bold w-[80%] h-[40px] bg-blue-800 rounded-[7px]">
          <div className="flex items-center">
            <img className="w-[32px] h-[32px] mr-3" src={googleLogo2} alt="google logo" />Sign in with Google
          </div>
        </button>
      </div>
    </div>
  )
}


export default Login