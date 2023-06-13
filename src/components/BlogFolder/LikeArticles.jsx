import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import PropTypes from "prop-types";
import heartIcon from "../../assets/HeartIcon.png";
import heartOutline from "../../assets/HeartOutlineRedWhite.png";




function LikeArticles({ id, likes }) {
    const [user] = useAuthState(auth);
    const likesRef = doc(db, "Posts", id);
    const [likeSignIn, setLikeSignIn] = useState("");
    const [clickVerify, setClickVerify] = useState(false);

    const handleLike = () => {
        if (likes?.includes(user.uid)){
            updateDoc(likesRef, { likes: arrayRemove(user.uid) })
            .then(() => { console.log("Unliked") })
            .catch((e) => { console.log(e) })
        }
        else {
            updateDoc(likesRef, { likes: arrayUnion(user.uid) })
            .then(() => { console.log("Liked") })
            .catch((e) => { console.log(e) })
        }
    }

    const likeSignInFunc = () => { 
        setClickVerify(true);
        setLikeSignIn("You need to sign in.");
        setTimeout(()=>{
            setLikeSignIn("");
            setClickVerify(false); 
        }, 2000)
        
    }

  return (
    <div className="flex justify-end items-center w-10">
        {user && !likes?.includes(user.uid) 
            ? (<img src={heartOutline} 
                    className="cursor-pointer md:w-[20px] md:h-[20px] xs:w-[18px] xs:h-[18px] w-[16px] h-[16px]" 
                    onClick={handleLike} 
                    alt="like"/>) 
                    
            : ""
        }

        {user && likes?.includes(user.uid) 
            ? (<img src={heartIcon} 
                    className="cursor-pointer md:w-[20px] md:h-[20px] xs:w-[18px] xs:h-[18px] w-[16px] h-[16px]" 
                    onClick={handleLike} 
                    alt="like"/>) 
                    
            : ""
        }

        {user
            ? ""

            : (<div className="flex flex-col relative">

                    <img src={heartOutline} 
                        className="cursor-pointer md:w-[20px] md:h-[20px] xs:w-[18px] xs:h-[18px] 
                        w-[16px] h-[16px]" 
                        onClick={likeSignInFunc} 
                        alt="like"/>

                    <div className={`text-white text-center absolute z-[1] md:text-[12px] xs:text-[12px] 
                        text-[10px] top-[50%] md:py-2 xs:py-2 py-1 bg-blue-800/40 md:w-[150px] xs:w-[130px] 
                        w-[100px] md:rounded-[6px] rounded-[4px] border border-yellow-500/30
                        ${!clickVerify ? "hidden" : "block"}`}>
                        {likeSignIn}
                    </div>

                </div>) 
        }

    </div>
  )
}


LikeArticles.propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    }

export default LikeArticles