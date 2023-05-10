/* eslint-disable react/prop-types */
import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage, auth } from '../../../firebaseConfig';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';



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
    <div className={`${currentlyLoggedInUser.uid === blogAdminUid ? "block" : "hidden"}`}>
      <i onClick={handleDelete} className={` fa fa-times fa-lg cursor-pointer hidden`} />
    </div>
    
  )
}

export default DeleteArticle