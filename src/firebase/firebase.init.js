// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcx4YQ1ioDRTuKwegzUzQTs0eOtkSuDXU",
  authDomain: "home-nest-f0c86.firebaseapp.com",
  projectId: "home-nest-f0c86",
  storageBucket: "home-nest-f0c86.firebasestorage.app",
  messagingSenderId: "813370160177",
  appId: "1:813370160177:web:a2714e70d70196918f5110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
