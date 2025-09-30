// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhaLGUJV5papvIwjiI8QqYuy_SqvnzyE",
  authDomain: "authform-2999.firebaseapp.com",
  projectId: "authform-2999",
  storageBucket: "authform-2999.firebasestorage.app",
  messagingSenderId: "810358589095",
  appId: "1:810358589095:web:e78a4f7590d01c4ae93d82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
