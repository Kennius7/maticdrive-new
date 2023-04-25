import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCU4wmsIlTEhNyBtew2VOiI9LCi2K0dcA0",
    authDomain: "matic-drive-blog.firebaseapp.com",
    projectId: "matic-drive-blog",
    storageBucket: "matic-drive-blog.appspot.com",
    messagingSenderId: "166312623409",
    appId: "1:166312623409:web:fd540ad12f91a70e4bc410"
  };


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

