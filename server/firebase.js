// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZMGG37EDMeTG4N5wBSx3YWZOeFF6tvns",
  authDomain: "capstone-9422f.firebaseapp.com",
  projectId: "capstone-9422f",
  storageBucket: "capstone-9422f.appspot.com",
  messagingSenderId: "920169663092",
  appId: "1:920169663092:web:f9579ae1cd440ba0d05f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);