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
                        md:h-[600px] sm:h-[650px] xs:h-[500px] h-[450px]">

                        <img src={article.imageUrl} alt="hero pics"
                            className="object-cover opacity-30 w-full md:h-[700px] sm:h-[750px] 
                                xs:h-[800px] h-[500px]"/>

                        <div className="text-white flex flex-col justify-center items-center 
                            sm:opacity-90 xs:opacity-85 opacity-80 absolute md:top-[60%] sm:top-[65%] 
                            xs:top-[60%] top-[50%] md:left-[10%] left-[2%] md:w-[70%] sm:w-[80%] w-[90%]">

                            <div className="w-full text-start font-bold md:text-[30px] sm:text-[28px] 
                                xs:text-[25px] text-[20px] md:mb-4 sm:mb-4 mb-2">
                                { article.title }
                            </div>

                            <div className="w-full text-start font-semibold italic md:text-[19px] 
                                sm:text-[20px] xs:text-[17px] text-[15px]">
                                { article.description }
                            </div>

                            <hr className="w-full bg-blue-500 border border-bg-dimWhite md:mt-6 mt-4"/>

                        </div>
                        
                    </div>

                </div>
            )}

            <div className="w-full">

                {article && (
                    <div className="w-full flex flex-col justify-center items-center bg-primary">

                        <div className="md:w-[80%] w-[96%] text-primary bg-white border-2 border-gray-400/70 
                            rounded-[5px] md:text-[17px] sm:text-[19px] xs:text-[17px] text-[14px] md:p-4 p-2 md:pt-6 pt-0">
                            {parse(article.postContent)}
                        </div>

                        <div className="bg-gray-200 flex flex-col justify-center items-center 
                            rounded-[5px] md:w-[80%] w-[96%] md:mx-2 mx-0 my-2">

                            <div className="flex xs:flex-row flex-col-reverse xs:justify-between justify-center 
                                md:items-center xs:items-start items-center xs:w-[95%] w-full xs:pt-0 pt-2">

                                <div className="flex sm:flex-row flex-col sm:justify-start justify-center 
                                    sm:items-center items-start text-primary w-full xs:pl-0 pl-1 sm:mt-2 
                                    xs:mt-0 mt-2">

                                    <div className="text-start italic md:text-[16px] sm:text-[17px] 
                                        xs:text-[15px] text-[14px]">
                                        Author:&nbsp; 
                                            <span className="text-blue-700">
                                                { article.createdBy }
                                            </span>
                                    </div>

                                    <div className="sm:block hidden">&nbsp;/&nbsp;</div>

                                    <div className="text-start italic md:text-[16px] sm:text-[17px] 
                                        xs:text-[15px] text-[14px] sm:mt-0 -mt-1">
                                        Posted on:&nbsp; 
                                        <span className="text-blue-700">
                                            { article.createdAt.toDate().toDateString() }
                                        </span>
                                    </div>

                                </div>
                                
                                <div className="flex xs:justify-end justify-start items-center w-full 
                                    xs:mt-1 -mt-2">

                                    { user && (<LikeArticles id={id} likes={article.likes} />) }

                                    <div className="flex justify-center items-center md:ml-2 ml-0">
                                        <div className="text-blue-700 italic md:text-[18px] sm:text-[18px] 
                                            text-[15px]">
                                            { article.likes.length }
                                        </div>
                                        <div className="text-primary italic md:text-[16px] sm:text-[18px] 
                                            text-[14px]">&nbsp;Like&#40;s&#41;
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center xs:ml-3 ml-2">
                                        <div className="text-blue-700 italic md:text-[18px] sm:text-[18px] 
                                            text-[15px]">
                                            { article.comments.length }
                                        </div>
                                        <div className="text-primary italic md:text-[16px] sm:text-[18px] 
                                            text-[14px]">&nbsp;Comment&#40;s&#41;
                                        </div>
                                    </div>

                                </div>

                            </div>
                            
                            <div className="w-[95%] md:my-8 my-2 md:mt-0 mt-6">
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