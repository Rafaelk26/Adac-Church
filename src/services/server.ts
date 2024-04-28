// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6nIV68zlSMWjO4LfSld7gmqH-b8q2f5c",
  authDomain: "adac-church-fa328.firebaseapp.com",
  projectId: "adac-church-fa328",
  storageBucket: "adac-church-fa328.appspot.com",
  messagingSenderId: "327345308747",
  appId: "1:327345308747:web:4270ce6b15be33ef83b9ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }