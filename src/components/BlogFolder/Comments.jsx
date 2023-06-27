import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import crossBlack from "../../assets/CrossBlack.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Comments({id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [currentlyLoggedInUser] = useAuthState(auth);
    const Navigate = useNavigate();

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
            { !currentlyLoggedInUser 
                ?   <div className="text-[16px] text-primary mb-6 mt-20">Wanna write a comment? Click&nbsp;
                        <span onClick={()=>Navigate("/signin")} 
                            className="text-blue-800 cursor-pointer hover:font-semibold focus:font-semibold">here
                        </span> to sign in/sign up...
                    </div>
                : currentlyLoggedInUser && (
                    <div className="w-full flex flex-col justify-center items-start mb-8">
                        <label className="text-primary md:text-[16px] text-[14px] italic mb-2">Write Your Comments Here</label>
                        <textarea 
                        type="text" 
                        className="bg-white text-gray-500 w-[90%] h-[100px] rounded-[3px]" 
                        value={comment} 
                        onChange={(e) => { setComment(e.target.value) }}
                        />
                        <button onClick={(e) => {handleChangeComment(e)}} 
                            className="text-white rounded-[3px] font-semibold text-start
                                commentButton commentButtonText duration-1000
                                md:w-[150px] w-[50%] md:h-[40px] h-[35px] md:pl-6 pl-3 md:mt-2 mt-4">Submit
                        </button>
                    </div>
                    
                )
            }
        </div>

        <div className="text-primary font-semibold md:text-[25px] text-[17px] md:mb-2 mb-1">
            Comments
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-[5px] 
            md:w-[90%] w-full min-h-[200px]">
            {
                comments.length === 0 
                    ?   <div className="text-start text-blue-700 md:text-[18px] text-[15px] font-semibold italic">
                            No comments here...
                        </div> 
                    : <div className="flex flex-col justify-center items-center w-[98%] min-h-[180px] 
                        rounded-[3px] m-2 bg-white">
                        {revComments && revComments.map(({ 
                            commentId, 
                            user, 
                            comment, 
                            userName, 
                            createdAt, 
                            numCommentId }) => {
                            console.log(numCommentId);
                            return (
                            <div key={numCommentId}
                                className={`${numCommentId === revComments.length - 1 
                                    ? "md:my-3 my-2" : "md:mb-3 mb-2"}
                                    flex flex-row justify-between items-center relative bg-transparent 
                                    border border-primary rounded-[3px] w-[98%] min-h-[100px] p-1`}>

                                <div className="flex flex-col justify-start items-start md:text-[15px] 
                                    text-[13px] w-[99%] min-h-[100px]">
                                    <div className="flex md:flex-row flex-col md:justify-between justify-center 
                                        md:items-center items-start w-full md:mb-2 mb-4">
                                        <span className={`${currentlyLoggedInUser 
                                            && user === currentlyLoggedInUser.uid 
                                            ? "text-blue-500" : "text-indigo-900"} 
                                            font-semibold md:underline no-underline md:text-[16px] text-[14px]`}>
                                            { userName }
                                        </span>
                                        <span className="text-primary font-semibold md:no-underline underline 
                                            md:text-[12px] text-[11px] md:mt-1 -mt-1">
                                            Posted on:&nbsp;<span className="text-blue-800">
                                            { createdAt.toDate().toDateString() }
                                            </span>
                                        </span>
                                    </div>
                                    { comment }
                                </div>
                                
                                <div className={`flex justify-center items-center absolute z-[1] bottom-[0%] 
                                    right-[0%] md:w-[20px] w-[17px] md:h-[20px] h-[17px] 
                                    ${!currentlyLoggedInUser ? "hidden" : "" }`}>
                                    {
                                        currentlyLoggedInUser && user === currentlyLoggedInUser.uid && (
                                            <div className="flex justify-end items-center w-[98%] h-[98%]">
                                                <img src={crossBlack} alt="delete comment" 
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