import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth, provider } from '../../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googleLogo from '../../assets/google-logo.png';
import heroPics from "../../assets/about-a.jpeg";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [offsetY, setOffsetY] = useState(0);
  let navigate = useNavigate()

  const handleScroll = () => { setOffsetY(window.pageYOffset) };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

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
    <div className="w-full flex flex-col justify-center items-center overflow-hidden relative
      md:h-[700px] sm:h-[1050px] xs:h-[600px] h-[700px]">
      <img src={heroPics} alt="hero pics"
        className="w-full opacity-10 object-cover md:h-[800px] sm:h-[1150px] xs:h-[700px] h-[1100px]"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="flex flex-col justify-center items-center absolute z-[1] bg-gray-700 rounded-[3px]
        md:top-[20%] sm:top-[35%] xs:top-[25%] top-[20%] md:w-[50%] sm:w-[80%] xs:w-[75%] w-[98%] md:h-[400px] 
        sm:h-[500px] h-[380px]">
        <div className="w-[96%] font-bold md:text-[18px] sm:text-[30px] text-[20px] text-start text-white 
          tracking-wider md:mb-6 sm:mb-8 mb-4">Sign In</div>

        <div className="w-full flex flex-col justify-center items-center sm:mb-10 mb-8">
          <div className="w-full flex justify-center items-center sm:mb-6 mb-4">
              <input 
                onChange={(e) => {setEmail(e.target.value)}} 
                type="email" 
                name="email" 
                placeholder="Enter your Email" 
                className="w-[96%] md:h-[35px] sm:h-[60px] h-[40px] rounded-[3px] pl-2 text-primary bg-white 
                placeholder:text-gray-700 md:placeholder:text-[14px] sm:placeholder:text-[20px] md:text-[14px] 
                sm:text-[20px]" 
              />
          </div>

          <div className="w-full flex justify-center items-center">
              <input 
                onChange={(e) => {setPassword(e.target.value)}} 
                type="password" 
                name="passsword" 
                placeholder="Enter your password" 
                className="w-[96%] md:h-[35px] sm:h-[60px] h-[40px] rounded-[3px] pl-2 text-primary bg-white 
                placeholder:text-gray-700 md:placeholder:text-[14px] sm:placeholder:text-[20px] md:text-[14px] 
                sm:text-[20px]" />
          </div>
        </div>
        
        <div className="w-full flex justify-center items-center mb-2">
            <button
              type="button" 
              onClick={handleSignIn} 
              className="w-[96%] md:h-[35px] sm:h-[60px] h-[40px] rounded-[4px] md:text-[16px] sm:text-[24px] 
              text-[16px] md:tracking-wider sm:tracking-widest tracking-wider bg-text-gradient sm:font-bold font-semibold 
              text-primary sm:border-2 border border-gray-900">Login
            </button>
        </div>

        <div className="w-[96%] flex justify-start items-center md:mb-6 mb-8">
          <p className="w-full text-white font-semibold md:text-[14px] sm:text-[24px] text-[16px]">
            <Link to="/signup">Create account</Link>
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <button 
            className="flex justify-center items-center text-white font-semibold w-[96%] md:h-[35px] 
            sm:h-[60px] h-[40px] bg-blue-900 rounded-[4px] border border-yellow-400" 
            onClick={handleGoogleSignIn}>
            <div className="w-full flex justify-center items-center md:text-[16px] sm:text-[24px] text-[18px]">
              <img className="w-[32px] h-[32px] mr-3" src={googleLogo} alt="google logo" />Sign in with Google
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Login