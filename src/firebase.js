
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1VgcoA-toapB9rnn-XbSvxblfzOPTrg0",
  authDomain: "askvit-da6aa.firebaseapp.com",
  projectId: "askvit-da6aa",
  storageBucket: "askvit-da6aa.appspot.com",
  messagingSenderId: "465966102115",
  appId: "1:465966102115:web:50225014ecebdb85086a56",
  measurementId: "G-4306LJ6QX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
