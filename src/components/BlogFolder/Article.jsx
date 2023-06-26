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
        console.log({...snapshot.data()}); 
        })
    }, [id])


  return (
    <section>

        <div className="w-full">

            {article && (
                <div className="w-full">

                    <div className="w-full flex flex-col justify-center items-center relative overflow-hidden 
                        md:h-[600px] sm:h-[700px] xs:h-[500px] h-[450px]">

                        <img src={article.imageUrl} alt="hero pics"
                            className="object-cover opacity-30 w-full md:h-[700px] sm:h-[900px] 
                                xs:h-[800px] h-[500px]"/>

                        <div className="w-[70%] text-white flex flex-col absolute z-[1 top-[65%] left-[10%]">
                            <div className="w-full text-start font-bold text-[30px]">
                                { article.title }
                            </div>
                            <div className="w-full text-start font-semibold italic text-[20px]">
                                { article.description }
                            </div>
                            <hr className="md:w-[60%] w-[90%] bg-blue-500 border border-bg-dimWhite mt-4"/>
                        </div>
                        
                    </div>

                </div>
            )}

            <div className="w-full">

                {article && (
                    <div className="w-full flex flex-col justify-center items-center bg-primary">

                        <div className="md:w-[80%] w-[95%] text-primary bg-white border-2 border-gray-400/70 
                            rounded-[5px] md:text-[17px] xs:text-[15px] text-[14px] p-4 pt-6">
                            {parse(article.postContent)}
                        </div>

                        <div className="bg-gray-200 flex flex-col justify-center items-center 
                            rounded-[5px] md:w-[80%] w-[90%] mx-2 my-2">

                            <div className="md:w-[95%] flex justify-between items-center pt-2">
                                <div className="flex justify-start items-center text-primary md:pl-2">
                                    <div className="text-[16px] italic">
                                        Author:&nbsp; 
                                            <span className="text-blue-700">
                                                { article.createdBy }
                                            </span>
                                    </div>
                                    <div className="md:block hidden">&nbsp;/&nbsp;</div>
                                    <div className="text-[16px] italic">
                                        Posted on:&nbsp; 
                                        <span className="text-blue-700">
                                            { article.createdAt.toDate().toDateString() }
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-around items-center">
                                    { user && (<LikeArticles id={id} likes={article.likes} />) }
                                    <div className="flex justify-center items-center ml-2">
                                        <div className="text-blue-700 italic text-[18px]">
                                            { article.likes.length }
                                        </div>
                                        <div className="text-primary italic text-[16px]">&nbsp;Likes</div>
                                    </div>
                                    <div className="text-[18px] flex justify-center items-center ml-2">
                                        <div className="text-blue-700 italic text-[18px]">
                                            { article.comments.length }
                                        </div>
                                        <div className="text-primary italic text-[16px]">&nbsp;Comments</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-[95%] my-8">
                                <Comments id={ article.id } />
                            </div>

                        </div>

                    </div>)
                }

            </div>

        </div>

    </section>
  )
}

export default Article