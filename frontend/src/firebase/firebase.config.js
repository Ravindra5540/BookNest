// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9T3oXHbiM0xKolk7hrxZHSsgvb7Qfe8",
  authDomain: "book-store-mern-app-ee0c4.firebaseapp.com",
  projectId: "book-store-mern-app-ee0c4",
  storageBucket: "book-store-mern-app-ee0c4.firebasestorage.app",
  messagingSenderId: "683616065694",
  appId: "1:683616065694:web:5ac8e6da22ccf2566ec38f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
