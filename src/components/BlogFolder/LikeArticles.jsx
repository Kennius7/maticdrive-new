/* eslint-disable react/prop-types */
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';



// eslint-disable-next-line react/prop-types
function LikeArticles({ id, likes }) {
    const [user] = useAuthState(auth);
    const likesRef = doc(db, "Posts", id);

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

  return (
    <div>
        <i className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : "" } fa-lg cursor-pointer 
            ${likes?.includes(user.uid) ? "text-red-600" : "text-primary"}`} 
            onClick={handleLike}
        />
    </div>
  )
}

export default LikeArticles