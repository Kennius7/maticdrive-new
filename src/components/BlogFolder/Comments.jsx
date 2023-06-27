import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import crossWhite from "../../assets/CrossWhite.png";
import { toast } from "react-toastify";



function Comments({id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [currentlyLoggedInUser] = useAuthState(auth);

    const commentRef = doc(db, "Posts", id);
    const revComments = [...comments].reverse();

    useEffect(() => {
    const docRef = doc(db, "Posts", id);
    onSnapshot(docRef, (snapshot) => {setComments([...snapshot.data().comments])});
    }, [id]);
    
    const generateHighestId = () => {
        if (comments.length === 0) {
            return 0
        } 
        if (comments.length > 0) {
            const ids = comments.map(item => item.numCommentId);
            const highestId = Math.max(...ids)
            return (highestId + 1);
        }
    }

    const handleChangeComment = () => {
        updateDoc(commentRef, {
            comments: arrayUnion({
                user: currentlyLoggedInUser.uid,
                userName: currentlyLoggedInUser.displayName,
                comment: comment,
                createdAt: new Date(),
                commentId: uuidv4(),
                numCommentId: generateHighestId(),
            })
        })
        .then((e) => {
            console.log(e);
            setComment("");
            toast("Comment submitted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT });
        })
        .catch((error) => {
            console.log(error);
            toast("Error uploading comment!", { type: "error", position: toast.POSITION.TOP_RIGHT })
        });
    }

    const handleDeleteComment = (comment) => {
        console.log(comment);
        if (window.confirm("Are you sure you want to delete this?")) {
            updateDoc(commentRef, {
                comments: arrayRemove(comment)
            })
            .then((e) => {
                console.log(e);
                toast("Comment deleted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT });
            })
            .catch((error) => {
                console.log(error);
                toast("Error deleting comment!", { type: "error", position: toast.POSITION.TOP_RIGHT })
            })
        }
    }


  return (
    <div className="w-full">

        <div className="w-full flex justify-start">
            {
                currentlyLoggedInUser && (
                    <div className="w-full flex flex-col justify-center items-start mb-8">
                        <label className="text-primary text-[16px] italic mb-2">Write Your Comments Here</label>
                        <textarea 
                        type="text" 
                        className="bg-white text-gray-500 w-[90%] h-[100px] rounded-[3px]" 
                        value={comment} 
                        onChange={(e) => { setComment(e.target.value) }}
                        />
                        <button onClick={(e) => {handleChangeComment(e)}} 
                            className="text-primary rounded-[3px] text-start w-[150px] h-[40px] 
                                pl-2 mt-2 bg-blue-gradient">Submit
                        </button>
                    </div>
                    
                )
            }
        </div>

        <div className="text-primary font-semibold text-[16px] mb-2">Comments</div>

        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-[5px] 
            w-[90%] min-h-[200px]">
            {
                comments.length === 0 
                    ? <div className="text-start text-blue-700 text-[18px] font-semibold italic">No comments here...</div> 
                    : <div className="flex flex-col justify-center items-center w-[98%] min-h-[180px] 
                        rounded-[3px] m-2 bg-dimWhite">
                        {revComments && revComments.map(({ 
                            commentId, 
                            user, 
                            comment, 
                            userName, 
                            createdAt, 
                            numCommentId }, index) => {
                            console.log(index);
                            return (
                            <div key={index}
                                className={`${index === 0 ? "my-3 bg-blue-600" : "mb-3"}
                                    flex flex-row justify-between items-center relative bg-gray-700 
                                    w-[98%] min-h-[100px] rounded-[3px]`}>

                                <div className="flex flex-col justify-start items-start w-[99%] min-h-[100px]">
                                    <span className={`${currentlyLoggedInUser && user === currentlyLoggedInUser.uid 
                                        ? "text-blue-500" : "text-red-500"} font-bold text-[16px]`}>
                                        { userName }
                                    </span>
                                    <hr className="bg-white border border-white opacity-70 w-[70%] mt-[2px]"/>
                                    { comment }
                                </div>

                                <div className={`flex justify-center items-center absolute z-[1] bottom-[0%] 
                                    right-[0%] rounded-[50%] opacity-60 bg-white w-[20px] h-[20px]`}>
                                    {
                                        currentlyLoggedInUser && user === currentlyLoggedInUser.uid && (
                                            <div className="flex justify-center items-center w-[98%] h-[98%] 
                                                bg-red-800/80 rounded-[50%]">
                                                <img src={crossWhite} alt="delete comment" 
                                                    className="cursor-pointer w-[80%] h-[80%]" 
                                                    onClick={() => { handleDeleteComment({ 
                                                        comment, 
                                                        commentId, 
                                                        user, 
                                                        userName, 
                                                        createdAt,
                                                        numCommentId,
                                                        }) 
                                                    }} 
                                                />
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                            )})
                        }
                    </div>
            }
        </div>

    </div>
  )
}

Comments.propTypes = {id: PropTypes.string.isRequired}

export default Comments