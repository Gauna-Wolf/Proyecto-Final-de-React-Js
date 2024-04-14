// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOH0iOFeoUQzeCatlvs8vE8NtYdNWUkMc",
  authDomain: "ecommerce-8a357.firebaseapp.com",
  projectId: "ecommerce-8a357",
  storageBucket: "ecommerce-8a357.appspot.com",
  messagingSenderId: "1057326156744",
  appId: "1:1057326156744:web:67e60015ca9351d0cc4efd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)