import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../../firebaseConfig';
import LikeArticles from './LikeArticles';
import { useAuthState } from 'react-firebase-hooks/auth';
import Comments from './Comments';



function Article() {
    const [id] = useParams();
    const [article, setArticle] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
      const docRef = doc(db, "Posts", id);
      onSnapshot(docRef, (snapshot) => { setArticle({ ...snapshot.data(), id: snapshot.id }) })
    }, [])


  return (
    <div>
        <div>
            {
                article && (
                            <div className="bg-primary">
                                <img src={ article.imageUrl } alt={ article.title } />
                                <div className="text-white mx-2 mt-2">
                                    <div className='font-bold'>{ article.title }</div>
                                    <div className='font-semibold'>{ article.description }</div>
                                    <hr className="bg-white border border-white"/>
                                    <div className='flex flex-row justify-around items-center mb-20'>
                                        <div className='flex flex-col justify-start -ml-16 mr-8'>
                                            <div className='text-[13px]'>Author: { article.createdBy }</div>
                                            <div className='text-[12px]'>Posted on: { article.createdAt.toDate().toDateString() }</div>
                                        </div>
                                        
                                        <div className='flex -mr-16'>
                                            { user && (<LikeArticles id={id} likes={article.likes} />) }
                                            <div>
                                                <p>{ article.likes.length }</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Comments id={ article.id } />
                                </div>
                            </div>
                )
            }
        </div>
    </div>
  )
}

export default Article