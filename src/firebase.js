import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA752DKw24MScKEXbK4hSogKA62SRrxReo",
  authDomain: "chat-app-a5b83.firebaseapp.com",
  projectId: "chat-app-a5b83",
  storageBucket: "chat-app-a5b83.appspot.com",
  messagingSenderId: "651498494311",
  appId: "1:651498494311:web:8d5cabe08dbbd5244e37c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
