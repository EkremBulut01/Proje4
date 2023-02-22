 
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAncYDP8VFcqYyNPIg-cXUOyDuaGmquMp4",
  authDomain: "fitness-app-c8b6d.firebaseapp.com",
  projectId: "fitness-app-c8b6d",
  storageBucket: "fitness-app-c8b6d.appspot.com",
  messagingSenderId: "193335423232",
  appId: "1:193335423232:web:23039a9166b49fa77643e5",
  measurementId: "G-XQYNTYQRPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);

