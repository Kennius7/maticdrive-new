import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import PropTypes from "prop-types";
import heartIcon from "../../assets/HeartIcon.png";
import heartOutline from "../../assets/HeartOutlineRedWhite.png";




function LikeArticles({ id, likes }) {
    const [user] = useAuthState(auth);
    // const [currentlyLoggedInUser] = useAuthState(auth);
    const likesRef = doc(db, "Posts", id);
    const [likeSignIn, setLikeSignIn] = useState("");

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
        setInterval(()=>{
            setLikeSignIn("You need to sign in.") 
        }, 3000)
        
    }

  return (
    <div className="flex justify-end items-center w-10">
        {!likes?.includes(user.uid) 
            ? (<img src={heartOutline} 
                    className="cursor-pointer w-[20px] h-[20px]" 
                    onClick={handleLike} 
                    alt="like"/>) 
                    
            : (<img src={heartIcon} 
                    className="cursor-pointer w-[20px] h-[20px]" 
                    onClick={handleLike} 
                    alt="like" />)}

        {likes?.includes(user.uid)
            ? (<div className="flex flex-col bg-red-400">
                    <img src={heartOutline} 
                        className="cursor-pointer w-[20px] h-[20px]" 
                        onClick={likeSignInFunc} 
                        alt="like"/>
                    <div className="text-white text-[14px]">{likeSignIn}</div>
                </div>) 
                    
            : ""}

        {/* <img src={`${!likes?.includes(user.uid) ? "../../assets/HeartIcon.png" : "../../assets/HeartOutline.png"}`} 
            className={`cursor-pointer ${likes?.includes(user.uid) ? "text-red-600" : "text-primary"}`} 
            onClick={handleLike}
            alt="like"/> */}
    </div>
  )
}

LikeArticles.propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    }

export default LikeArticles