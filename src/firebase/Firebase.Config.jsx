// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsRotc4r5BgLLeUIZdx_8zC54lfxmdJmA",
  authDomain: "chatrooms-6c831.firebaseapp.com",
  projectId: "chatrooms-6c831",
  storageBucket: "chatrooms-6c831.appspot.com",
  messagingSenderId: "328170334990",
  appId: "1:328170334990:web:57224934a900ab79dd455f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
