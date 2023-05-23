import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { storage, db, auth } from '../../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import "../../../node_modules/react-quill/dist/quill.snow.css";
import heroPics from "../../assets/about-a.jpeg";
// import parse from "html-react-parser";




function ArticlesForm() {
  const [user] = useAuthState(auth);
  const [currentlyLoggedInUser] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [postContent, setPostContent] = useState("");
  const [progress, setProgress] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const blogAdminUid = "gjSWaw1PnsZMfCntqQGDCSvErH93";
  const handleScroll = () => { setOffsetY(window.pageYOffset) };


  ArticlesForm.modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"]
    ],
  },

  ArticlesForm.formats = [
    "header", "font", "size", "bold",
    "italic", "underline", "strike",
    "blockquote", "list", "bullet",
    "link", "image", "video",
    "code-block"
  ]



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
    <div className="flex flex-col">

      {
        !user || currentlyLoggedInUser && currentlyLoggedInUser.uid !== blogAdminUid
          ?
          <div className='flex flex-col justify-center items-center p-2 mx-4 mb-56 mt-60 bg-black-gradient-2 
            rounded-[10px] box-shadow'>
            <span className='font-semibold my-4 text-[22px]'>
              <Link className='text-[30px] text-gradient' to="/signin">Login</Link> to access Blog Section
            </span>
            <div className="font-semibold mb-4">Don&apos;t have an account? 
              <Link className='text-gradient' to="/signup">Sign up</Link>
            </div>
          </div>
          :
          <div className="flex justify-center items-center">

            <div className={`w-full flex flex-col justify-center items-center overflow-hidden relative 
              sm:h-[1150px] xs:h-[1100px] h-[1000px]`}>

              <img src={heroPics} alt="hero pics"
                className="w-full opacity-10 object-cover sm:h-[1350px] xs:h-[1300px] h-[1200px]"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              />

              <div className="w-full flex flex-col justify-center md:items-center xs:items-start items-center 
                absolute z-[1] sm:top-[16%] xs:top-[12%] top-[10%] md:pl-8 xs:pl-4 pl-0">

                <div className="md:w-[70%] font-poppins font-bold md:text-start text-center text-white italic mb-4 
                  md:text-[25px] sm:text-[30px] xs:text-[22px] text-[18px]">
                  Write a new article
                </div>

                <div className="flex flex-col justify-center items-center md:w-[70%] sm:w-[90%] xs:w-[80%] 
                  w-[98%] mb-4">
                  <div className="w-full flex flex-col justify-center items-center mb-4">
                    <textarea
                      className="w-full bg-white text-primary placeholder:italic
                      sm:placeholder:p-1 placeholder:p-1 placeholder-gray-500 md:placeholder:text-[15px] 
                      sm:placeholder:text-[17px] placeholder:text-[13px] h-[35px]"
                      placeholder="Title" type="text" name="title" value={formData.title}
                      onChange={handleChange} />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    <textarea
                      className="w-full bg-white text-primary placeholder:italic
                      sm:placeholder:p-1 placeholder:p-1 placeholder-gray-500 md:placeholder:text-[15px] 
                      sm:placeholder:text-[17px] placeholder:text-[13px] h-[35px]"
                      placeholder="Description" name="description" value={formData.description}
                      onChange={handleChange} />
                  </div>
                </div>

                <div className="w-full flex flex-col justify-center md:items-center xs:items-start items-center 
                  md:mb-[120px] mb-[150px]">
                  <ReactQuill
                    className="bg-white text-blue-500 md:w-[70%] sm:w-[90%] xs:w-[80%] w-[98%] h-[400px]"
                    theme="snow"
                    value={postContent}
                    placeholder="Write something awesome..."
                    modules={ArticlesForm.modules}
                    formats={ArticlesForm.formats}
                    onChange={(event) => {setPostContent(event)}}
                  />
                </div>

                <div className="w-full flex flex-col justify-center md:items-center xs:items-start items-center 
                  text-white md:mb-16 sm:mb-20 xs:mb-16 mb-12">
                  <label htmlFor="" className="italic mb-1 ml-1">Header Image Upload</label>
                  <input 
                    type='file' 
                    name='image' 
                    accept='image/*' 
                    onChange={handleImageChange} 
                    className="md:w-[70%] sm:w-[90%] xs:w-[80%] w-[98%] bg-dimWhite" />
                  <div className="w-full flex flex-col justify-center md:items-center xs:items-start items-center">
                    {progress === 0 
                      ? <hr className="md:w-[70%] sm:w-[90%] xs:w-[80%] w-[98%] md:mt-4 mt-2"/> 
                      : <div className="flex justify-start items-center w-[99%] bg-white h-[20px] rounded-[4px]">
                          <div className={`w-[${progress}%] h-[18px] bg-blue-600 rounded-[3px] text-[14px]`}>
                            {`Uploading Image ${progress}%`}
                          </div>
                        </div>
                    }
                  </div>
                </div>

                <div className="md:w-[70%] sm:w-[90%] xs:w-[80%] w-[98%] flex justify-start items-center">
                  <button 
                    onClick={handlePublish}
                    className="rounded-[5px] bg-blue-700 text-white font-semibold w-full md:h-[40px] 
                      sm:h-[55px] xs:h-[45px] h-[35px] text-center md:text-[18px] sm:text-[20px] 
                      xs:text-[18px] text-[14px] xs:pl-0 pl-2 tracking-[1px]">
                      Publish
                  </button>
                </div>
              </div>

            </div>

          </div>
      }

    </div>
  )
}

export default ArticlesForm
