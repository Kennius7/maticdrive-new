import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../../../firebaseConfig";
import DeleteArticle from './DeleteArticle';
import { useAuthState } from 'react-firebase-hooks/auth';
import LikeArticles from "./LikeArticles";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const articleRef = collection(db, "Posts");
    const q = query(articleRef, orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    })
  }, [])


  return (
    <div className="w-full my-10">
      {
        articles.length === 0 
        ? (
          <div className="w-full flex flex-col justify-center items-center">

            <div className={`w-full flex md:flex-row flex-col justify-center items-center bg-black-gradient-2 
              box-shadow w-full ss:h-[300px]`}>
              
              <div className="font-poppins italic ss:leading-[30px] ss:max-w-[480px] max-w-[280px] text-white 
                text-center ss:text-[17px] text-[15px] ss:my-0 my-12">
                  You&apos;re most probably seeing this because you are not signed in or you are 
                  having some issues with your internet. <br/> <br/>
                  Check your internet connection and reload your page, or you can sign in, and you&apos;ll 
                  be good to go!
              </div>
              
            </div>

          </div>
          ) 
        : (articles.map(({ 
              id, 
              title, 
              description, 
              postContent, 
              imageUrl, 
              createdAt, 
              createdBy, 
              userId, 
              likes, 
              comments
              }) => (
              <div className="w-full flex justify-center items-center text-white mb-20 h-[400px]" key={id}>

                <Link to={`/article/${id}`} className="w-[30%]">
                  <div className="w-[400px] h-[400px]">
                    <img src={imageUrl} alt="Post Picture" className="w-full h-full object-cover" />
                  </div>
                </Link>

                <div className="flex flex-col justify-center items-center w-[68%]">

                  <div className="w-full flex flex-col justify-center items-start mb-4">
                    <div className='font-bold text-[20px]'>{title}</div>
                    <div className="font-semibold italic text-[17px]">{description}</div>
                  </div>

                  <Link to={`/article/${id}`} className="w-full h-[300px]">
                    <div className="w-full h-full overflow-ellipsis overflow-hidden border border-yellow-500">
                      {parse(postContent)}
                    </div>
                  </Link>

                  <div className="w-full flex justify-between items-center">

                    <div className="w-[50%] flex flex-col justify-center items-start">

                      <div className="">{createdBy && 
                        (<div>
                          <span className="text-[15px]">Created by:&nbsp;</span> 
                          <span className="font-semibold">{createdBy}</span>
                        </div>)}
                      </div>

                      <div className="">
                        <span className="text-[15px]">Created At:&nbsp;</span> 
                        <span className="text-[14px] text-blue-700">{createdAt.toDate().toDateString()}</span>
                      </div>

                    </div>

                    <div className="w-[30%] flex justify-end items-center">

                      <div className="flex justify-center items-center mr-4">
                        {user && (<LikeArticles id={id} likes={likes} />)}
                        <div className="ml-2">
                          <div className="italic text-[15px]">
                            {likes && likes.length > -1 && (
                              <p><span className="text-blue-700">{ likes?.length }</span>&nbsp;like&#40;s&#41;</p>)}
                          </div>
                        </div>
                      </div>

                      <div className="mr-4">
                        <div>
                          {comments && comments.length > -1 && (
                              <div>
                                <p className="italic text-[15px]">
                                  <Link to={`/article/${id}`}>
                                    <span className="text-blue-700">{ comments?.length }</span> &nbsp;comment&#40;s&#41;
                                  </Link>
                                </p>
                              </div>
                          )}
                        </div>
                      </div>

                      <div className="">
                        <div>{user && userId === userId && 
                          (<DeleteArticle 
                              id={id} 
                              imageUrl={imageUrl} />)}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
              )
            )
          )
      }
    </div>
  )
}

export default Articles