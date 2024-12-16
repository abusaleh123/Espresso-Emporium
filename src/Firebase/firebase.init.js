// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtzotYMrDOaJS2c5i7pM_i8gMFYaA3y4c",
  authDomain: "coffee-store-5458f.firebaseapp.com",
  projectId: "coffee-store-5458f",
  storageBucket: "coffee-store-5458f.firebasestorage.app",
  messagingSenderId: "96975105981",
  appId: "1:96975105981:web:511182b7fbcad713b42cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth