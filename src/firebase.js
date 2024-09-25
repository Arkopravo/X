// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-8ab3d.firebaseapp.com",
  projectId: "x-clone-8ab3d",
  storageBucket: "x-clone-8ab3d.appspot.com",
  messagingSenderId: "163492401236",
  appId: "1:163492401236:web:0647d60cf85da1a373ddc1",
  measurementId: "G-Z6CFYXBG2W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
