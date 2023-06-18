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
    <div className="w-full">
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
        : <div className="w-full bg-article-black">
            {(articles.map(({ 
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
              <div key={id} className="w-full text-white flex sm:flex-row flex-col sm:justify-around 
                justify-center sm:items-center xs:items-start items-center md:pt-10 sm:pt-12 pt-8 
                md:mb-20 sm:mb-20 xs:mb-24 mb-20 md:h-[38vw] xs:pl-3 pl-0">

                <div className="sm:hidden w-full flex flex-col justify-center items-start">
                  <div className="font-bold xs:text-[23px] text-[20px]">{title}</div>
                  <div className="font-semibold italic xs:text-[18px] text-[16px]">{description}</div>
                </div>

                <Link to={`/article/${id}`} className="md:w-[33vw] md:h-[33vw] sm:w-[42vw] sm:h-[32vw] 
                  xs:w-[86vw] xs:h-[86vw] w-[98vw] h-[98vw]">
                  <img src={imageUrl} alt="Post Picture" className="w-full h-full object-cover" />
                </Link>

                <div className="flex flex-col justify-around items-center md:w-[65%] sm:w-[58%] 
                  xs:w-[87.8%] w-[99%] md:h-full">

                  <div className="hidden w-full sm:flex flex-col justify-center items-start">
                    <div className="font-bold md:text-[22px] sm:text-[18px] xs:text-[23px] text-[20px]">{title}</div>
                    <div className="font-semibold italic md:text-[17px] sm:text-[16px] xs:text-[18px] text-[16px]">{description}</div>
                  </div>

                  <Link to={`/article/${id}`} className="relative overflow-hidden w-full md:h-[350px] sm:h-[240px] h-[200px]">
                    <div className="w-full h-full text-primary overflow-hidden bg-white pl-1 pt-2 md:text-[17px] 
                      xs:text-[15px] text-[14px]">
                      {parse(postContent)}
                    </div>
                    <div className="text-center text-white italic seeMoreTextShadow bg-article-black-gradient 
                      absolute z-[2] sm:text-[20px] text-[16px] bottom-[-1%] w-full h-[50px] sm:pt-4 pt-5 ">
                      See more...
                    </div>
                  </Link>

                  <div className="w-full flex justify-between items-start">

                    <div className="w-[50%] flex flex-col justify-center items-start h-[35px]">

                      <div className="flex justify-center items-center h-[50%]">
                        {createdBy && 
                          (<div>
                            <span className="italic md:text-[15px] sm:text-[15px] xs:text-[14px] xxs:text-[12px] 
                              text-[10px]">Created by:&nbsp;</span> 
                            <span className="font-semibold md:text-[15px] sm:text-[16px] xs:text-[14px] xxs:text-[12px] 
                              text-[10px]">{createdBy}</span>
                          </div>)}
                      </div>

                      <div className="flex justify-center items-center h-[50%]">
                        <span className="italic md:text-[14px] sm:text-[15px] xs:text-[14px] xxs:text-[12px] 
                          text-[10px]">Created At:&nbsp;</span> 
                        <span className="text-blue-700 md:text-[14px] sm:text-[15px] xs:text-[14px] xxs:text-[12px] 
                          text-[10px]">{createdAt.toDate().toDateString()}</span>
                      </div>

                    </div>

                    <div className="sm:w-[50%] w-[48%] flex justify-end items-center">

                      <div className="flex justify-end items-center md:mr-4 sm:mr-2 xs:mr-0 mr-2">
                        <LikeArticles id={id} likes={likes} />
                        <div className="md:ml-2 ml-1">
                          <div className="italic md:text-[15px] sm:text-[17px] xs:text-[15px] 
                            xxs:text-[13px] text-[11px]">
                            {likes && likes.length > -1 && (
                              <p>
                                <span className="text-blue-700">
                                  { likes?.length }
                                </span>&nbsp;like&#40;s&#41;
                              </p>)}
                          </div>
                        </div>
                      </div>

                      <div className="md:w-[24%] sm:w-[48%] w-[50%] flex justify-end items-center 
                        md:mr-4 sm:mr-2 xs:mr-3 mr-2">
                        <div>
                          {comments && comments.length > -1 && (
                            <div className="italic md:text-[15px] sm:text-[17px] xs:text-[15px] 
                              xxs:text-[13px] text-[11px]">
                              <Link to={`/article/${id}`}>
                                <span className="text-blue-700">
                                  { comments?.length }
                                </span>&nbsp;comment&#40;s&#41;
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        {user && userId === userId && (<DeleteArticle id={id} imageUrl={imageUrl} />)}
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            )))}
        </div>
      }
    </div>
  )
}

export default Articles