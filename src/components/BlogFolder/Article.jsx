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
      
      onSnapshot(docRef, (snapshot) => { 
        setArticle({ ...snapshot.data(), id: snapshot.id }); 
        console.log(...snapshot.data()); 
        })
    })


  return (
    <section>

        <div className="w-full">

            {article && (
                <div className="w-full">

                    <div className="w-full flex flex-col justify-center items-center relative overflow-hidden 
                        md:h-[600px] sm:h-[700px] xs:h-[500px] h-[450px]">

                        <img src={article.imageUrl} alt="hero pics"
                            className="w-full md:h-[700px] sm:h-[900px] xs:h-[800px] h-[500px] object-cover opacity-30"/>

                        <div className="w-[70%] text-white flex flex-col absolute z-[1 top-[65%] left-[10%]">
                            <div className="w-full text-start font-bold text-[30px]">{ article.title }</div>
                            <div className="w-full text-start font-semibold italic text-[20px]">{ article.description }</div>
                            <hr className="w-[60%] bg-blue-500 border border-bg-dimWhite mt-4"/>
                        </div>
                        
                    </div>

                </div>
            )}

            <div className="w-full bg-white">

                {article && (
                    <div className="w-full flex flex-col justify-center items-center">

                        <div className="w-[70%] text-primary bg-white border-2 border-yellow-500/40 
                            rounded-[5px] md:text-[17px] xs:text-[15px] text-[14px] p-4">
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

        </div>

    </section>
  )
}

export default Article