import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage, auth } from '../../../firebaseConfig';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';
import crossWhite from "../../assets/CrossWhite.png";



function DeleteArticle({id, imageUrl}) {
    const blogAdminUid = "gjSWaw1PnsZMfCntqQGDCSvErH93";
    const [currentlyLoggedInUser] = useAuthState(auth);


    const handleDelete = async () => {
      if (window.confirm("Are you sure you want to delete this?")) {
        try {
          await deleteDoc(doc(db, "Posts", id))    
          toast("Article deleted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT })
          const storageRef = ref(storage, imageUrl)
          await deleteObject(storageRef)
        } catch (error) {
          toast("Error deleting article!", { type: "error", position: toast.POSITION.TOP_RIGHT })
          console.log(error);
        }
      }
    }


  return (
    <div onClick={handleDelete} 
      className={`${currentlyLoggedInUser && currentlyLoggedInUser.uid === blogAdminUid 
          ? "block w-[15px] h-[15px] bg-red-800/40" 
          : "hidden"}`}>
      <img src={crossWhite} className={`w-full h-full cursor-pointer`} />
    </div>
    
  )
}

DeleteArticle.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  }

export default DeleteArticle