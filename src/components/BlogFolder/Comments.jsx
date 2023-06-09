import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";



function Comments({id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [currentlyLoggedInUser] = useAuthState(auth);

    const commentRef = doc(db, "Posts", id);

    useEffect(() => {
    const docRef = doc(db, "Posts", id);
    onSnapshot(docRef, (snapshot) => {setComments([...snapshot.data().comments])})
    })
    
    const handleChangeComment = (e) => {
        if (e.key === "Enter") {
            updateDoc(commentRef, {
                comments: arrayUnion({
                    user: currentlyLoggedInUser.uid,
                    userName: currentlyLoggedInUser.displayName,
                    comment: comment,
                    createdAt: new Date(),
                    commentId: uuidv4(),
                })
            })
            .then(() => {
                setComment("");
            });

        }
    }

    const handleDeleteComment = (comment) => {
        console.log(comment);
        updateDoc(commentRef, {
            comments: arrayRemove(comment)
        })
        .then((e) => {
            console.log(e);
        })
        .catch((error) => {
            console.log(error);
        })
    }





  return (
    <div>

        <div className="w-full mb-10 flex justify-start">
            {
                currentlyLoggedInUser && (
                    <div>
                        <label>Write Your Comments Here</label>
                        <textarea 
                        type="text" 
                        className="bg-gray-700 w-[90%] h-[80px] rounded-[3px]" 
                        value={comment} 
                        onChange={(e) => { setComment(e.target.value) }}  
                        onKeyUp={(e) => { handleChangeComment(e) }}
                        />
                    </div>
                    
                )
            }
        </div>

        <div className="w-full flex flex-col justify-start bg-gray-800 w-[100%] mr-2 pl-2 pt-2">
            {
                comments !== null && comments.map(
                    ({ commentId, user, comment, userName, createdAt }) => 
                        <div className='w-[90%] mb-6 bg-gray-900 rounded-[3px] pl-1 pt-1' key={commentId}>
                            <div className='flex flex-col justify-start'>
                                <span className={`${user === currentlyLoggedInUser.uid ? "text-blue-500" : "text-red-500"} font-bold text-[13px]`}>{ userName }</span>
                                <hr className='bg-white opacity-30 w-[250px] mb-2' />
                                { comment }
                            </div>
                            <div>
                                {
                                    user === currentlyLoggedInUser.uid && (
                                        <div className='flex justify-end'>
                                            <i className="fa fa-times fa-sm text-white cursor-pointer" 
                                                onClick={() => { handleDeleteComment({comment, commentId, user, userName, createdAt}) }} />
                                        </div>
                                        
                                    )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
       
    </div>
  )
}

Comments.propTypes = {id: PropTypes.string.isRequired}

export default Comments