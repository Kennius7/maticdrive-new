import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { storage, db, auth } from '../../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph';


// import EditorContainer from '../EditorContainer';
import parse from "html-react-parser";
import heroPics from "../../assets/about-a.jpeg";



function ArticlesForm() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [postContent, setPostContent] = useState("");
  const [progress, setProgress] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset) };
  // const editorConfiguration = {
  //   plugins: [ Essentials, Bold, Italic, Paragraph ],
  //   toolbar: [ "bold", "italic" ]
  // }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageUrl: e.target.files[0] })
  }

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.imageUrl || !postContent) {
      toast("Please fill out all necessary fields", { type: "error" })
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.imageUrl.name}`)

    const uploadImage = uploadBytesResumable(storageRef, formData.imageUrl)

    uploadImage.on("state_changed", (snapshot) => {
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progressPercent);
    }, (err) => console.log(err),
      () => {
        setFormData({ title: "", description: "", imageUrl: "" });
        setPostContent("");
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const articleRef = collection(db, "Posts");
            addDoc(articleRef, {
              title: formData.title,
              description: formData.description,
              imageUrl: url,
              postContent: postContent,
              createdAt: Timestamp.now().toDate(),
              createdBy: user.displayName,
              userId: user.uid,
              likes: [],
              comments: [],
            })
              .then(() => {
                toast("Article submitted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT })
                setProgress(0)
              })
              .catch(() => {
                toast("Error submitting article!", { type: "error", position: toast.POSITION.TOP_RIGHT })
              })
          })
      }
    )
  }





  return (
    <div className='text-white flex flex-col'>

      {
        !user
          ?
          <div className='flex flex-col justify-center items-center p-2 mx-4 mb-56 mt-60 bg-black-gradient-2 rounded-[10px] box-shadow'>
            <span className='font-semibold my-4 text-[22px]'><Link className='text-[30px] text-gradient' to="/signin">Login</Link> to access Blog Section</span>
            <div className="font-semibold mb-4">Don&apos;t have an account? <Link className='text-gradient' to="/signup">Sign up</Link></div>
          </div>
          :
          <div className='flex justify-center items-center relative'>

            <div className={`w-full flex flex-col justify-center items-center overflow-hidden`}>
              <img src={heroPics} alt="hero pics"
                className="w-full ss:h-[1000px] h-[500px] opacity-10"
                style={{ transform: `translateY(${offsetY * 0.7}px)` }}
              />

              <div className="flex flex-col justify-center items-center w-full ss:mt-[150px] 
              absolute z-[1]">

                <div className='font-poppins font-bold text-[25px] text-center 
                my-4 mb-10'>Create Article</div>
                <div className="flex flex-col justify-center items-center">
                  <div className='flex flex-col mb-4 w-full'>
                    <label htmlFor="">Title</label>
                    <textarea
                      className='bg-white opacity-50 text-primary placeholder-gray-400 w-[400px]'
                      placeholder='Post Title' type='text' name='title' value={formData.title}
                      onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='flex flex-col mb-4 w-full'>
                    <label htmlFor="">Description</label>
                    <textarea
                      className='bg-white opacity-50 text-primary placeholder-gray-400 w-[400px]'
                      placeholder='Post Description' name="description" value={formData.description}
                      onChange={(e) => handleChange(e)} />
                  </div>
                </div>
                <div className='flex flex-col mb-4 mt-8'>
                  <div className="font-poppins font-semibold text-[25px] text-center text-white mb-8">Post Content</div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={postContent}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setPostContent(data);
                    }}
                  />
                  {/* <EditorContainer /> */}
                </div>

                <div className='text-blue-500 w-[400px] h-[100px] bg-red-200 my-16'>
                  {parse(postContent)}
                </div>


                <label htmlFor="">Image</label>
                <input type='file' name='image' accept='image/*' onChange={(e) => handleImageChange(e)} />

                {progress === 0 ? null : (
                  <div className="">
                    <div className="progress">
                      <div className={`w-[${progress}%] h-[20px] bg-blue-300 progress-bar progress-bar-striped`}>{`Uploading Image ${progress}%`}</div>
                    </div>
                  </div>
                )}

                <button className='w-[100px] h-[30px] rounded-[8px] bg-blue-500 mt-10' onClick={handlePublish}>Publish</button>
              </div>

            </div>



          </div>
      }

    </div>
  )
}

export default ArticlesForm