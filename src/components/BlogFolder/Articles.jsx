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
    <div className="">
      {
        !user || articles.length === 0 
        ? (
          <div className="flex flex-col justify-center items-center">
            <div className={`flex md:flex-row flex-col justify-center items-center bg-black-gradient-2 
            box-shadow text-[17px] w-full ss:h-[300px]`}>
              <div className="font-poppins italic text-[18px] ss:leading-[30px] ss:max-w-[480px] text-white 
              text-center">
                  You&apos;re most probably seeing this because you are not signed in or you are 
                  having some issues with your internet. <br/>
                  Check your internet connection or just reload your page and you&apos;ll 
                  be good to go!
              </div>
            </div>
          </div>
          ) 
        : (articles.map(({ id, title, description, postContent, imageUrl, createdAt, createdBy, userId, likes, comments }) => (
              <div className="bg-gray-300 my-12" key={id}>
                <div>
                  <div>{user && userId === userId && (<DeleteArticle id={id} imageUrl={imageUrl} />)}</div>
                </div>
                <Link to={`/article/${id}`}>
                  <img src={imageUrl} alt='Post Picture' />
                </Link>
                
                <div className='font-bold text-[20px]'>{title}</div>
                <div className='font-semibold text-[17px]'>{description}</div>
                <div>{parse(postContent)}</div>
                <div className="mt-8">{createdBy && 
                  (<div>
                    <span className="text-[15px]">Created by: </span> 
                    <span className="font-semibold">{createdBy}</span>
                  </div>)}
                </div>
                <div><span className="text-[15px]">Created At:</span> <span className="text-blue-700">{createdAt.toDate().toDateString()}</span></div>
                
                <div className="flex flex-row">
                  <div className="flex flex-row">
                    {
                      user && (<LikeArticles id={id} likes={likes} />)
                    }
                    <div className="ml-2">
                      <div>
                        {
                          likes && likes.length > -1 && (
                            <p>{ likes?.length } likes</p>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <div>
                      {
                        comments && comments.length > -1 && (
                          <div>
                            <p><Link to={`/article/${id}`}>{ comments?.length } comments</Link></p>
                          </div>
                        )
                      }
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