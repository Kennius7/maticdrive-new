import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../../firebaseConfig';
import LikeArticles from './LikeArticles';
import { useAuthState } from 'react-firebase-hooks/auth';
import Comments from './Comments';
import parse from 'html-react-parser';



function Article() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
      const docRef = doc(db, "Posts", id);
      onSnapshot(docRef, (snapshot) => { setArticle({ ...snapshot.data(), id: snapshot.id }) })
    })


  return (
    <section>
        <div className="w-full my-20">
            {article && 
                (<div className="w-full flex flex-col justify-center items-center">

                    <div className="w-[60%] text-white flex flex-col justify-center items-start mb-2">
                        <div className="w-full font-bold text-[30px]">{ article.title }</div>
                        <div className="w-full font-semibold italic text-[20px]">{ article.description }</div>
                        <hr className="w-[95%] bg-white border border-white"/>
                    </div>

                    <div>
                        <img src={ article.imageUrl } 
                            alt={ article.title } 
                            className="w-[60vw] h-[50vw] bg-blue-400 object-cover" />
                    </div>

                    <div className="w-[60%] text-primary
                      bg-white border border-yellow-500/40 md:text-[17px] xs:text-[15px] text-[14px]">
                      {parse(article.postContent)}
                    </div>

                    <div className="w-[60%] text-white flex justify-between items-center mx-2 mt-2">

                        <div className="w-[30%] flex justify-between items-center mb-20">
                            <div className="flex flex-col justify-start items-center text-white">
                                <div className='text-[13px]'>Author: { article.createdBy }</div>
                                <div className='text-[12px]'>Posted on: { article.createdAt.toDate().toDateString() }</div>
                            </div>
                            
                            <div className="w-[30%] flex">
                                { user && (<LikeArticles id={id} likes={article.likes} />) }
                                <div>
                                    <div className="text-blue-400">{ article.likes.length }</div>
                                    &nbsp;Likes
                                </div>
                            </div>
                        </div>
                        
                        <Comments id={ article.id } />

                    </div>

                </div>)
            }
        </div>

    </section>
  )
}

export default Article